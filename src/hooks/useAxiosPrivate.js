import { useSelector } from "react-redux";
import useRefreshToken from "./useRefreshToken";
import { useEffect } from "react";
import { axiosPrivate } from "api/axios";

export default function useAxiosPrivate() {
  // useRefreshToken => accessToken
  const refresh = useRefreshToken();
  // auth lấy từ auth-slice
  const { auth } = useSelector((state) => state);
  console.log(auth);

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      ((config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearers ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error))
    );
    // accessToken hết hạn => chạy xuống

    const responseInterceptor = axiosPrivate.interceptors.use(
      ((response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
      })
    );
    return () => {
      // clean up
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken, refresh]);

  return axiosPrivate;
}
