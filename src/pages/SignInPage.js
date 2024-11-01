import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "component/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "component/label";
import { Input } from "component/input";
import { IconEyeToggle } from "component/icons";
import { Button, ButtonGoogle } from "component/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";
import { useEffect } from "react";

const schema = yup.object({
  email: yup.string().email().required("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});

const SignInPage = (props) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const dispatch = useDispatch();

  const handleSignIn = async (values) => {
    dispatch(authLogin(values));
  };
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.id) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <LayoutAuthentication heading="Welcome Back!">
        <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
          Dont have an account?{" "}
          <Link to="/register" className="font-medium underline text-primary">
            Register
          </Link>
        </p>
        <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <FormGroup>
            <Label htmlFor="email">Email*</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder={`${
                errors?.email?.message
                  ? errors?.email?.message
                  : "example@gmail.com"
              }`}
              error={errors.email?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password*</Label>
            <Input
              control={control}
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder={`${
                errors?.password?.message
                  ? errors?.password?.message
                  : "Create a password"
              }`}
              error={errors.password?.message}
            >
              <IconEyeToggle
                open={showPassword}
                onClick={handleTogglePassword}
              ></IconEyeToggle>
            </Input>
          </FormGroup>
          <FormGroup>
            <span className="inline-block text-sm font-medium text-right text-primary">
              Forgot password
            </span>
          </FormGroup>
          <Button
            className="w-full "
            type="submit"
            isLoading={false}
            kind="primary"
          >
            Sign in
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
