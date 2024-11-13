import Modal from "react-modal";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPayment from "layout/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
import RequiredAuthPage from "pages/RequiredAuthPage";
import UnAuthorizePage from "./pages/UnAuthorizePage";
import { permissions } from "constants/permission";

Modal.setAppElement("#root");
Modal.defaultStyles = {};

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaign = lazy(() => import("./pages/StartCampaign"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const UnauthorizePage = lazy(() => import("./pages/UnAuthorizePage"));

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(authUpdateUser({ user: user, accessToken: access_token }));
    } else {
      // user hết hạn
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/unauthorize"
            element={<UnAuthorizePage></UnAuthorizePage>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route
            element={
              <RequiredAuthPage
                allowPermission={[permissions.campaign.CREATE_CAMPAIGN]}
              ></RequiredAuthPage>
            }
          >
            <Route
              path="/start-campaign"
              element={<StartCampaign></StartCampaign>}
            ></Route>
          </Route>

          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
