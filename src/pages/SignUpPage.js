import useToggleValue from "hooks/useToggleValue";
import React, { useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "component/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "../component/label";
import { Input } from "../component/input";
import { IconEyeToggle } from "component/icons";
import { Checkbox } from "component/checkbox";
import { Button } from "component/button";

const schema = yup.object({
  fullname: yup.string().required("This field is required"),
  email: yup.string().email().required("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});

const SignUpPage = (props) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignUp = (values) => {
    console.log(values);
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  // console.log(errors);

  return (
    <div>
      <LayoutAuthentication heading="Sign Up">
        <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
          Already have an account?{" "}
          <Link to="/sign-in" className="font-medium underline text-primary">
            Sign in
          </Link>
        </p>
        <button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
          <img src="/icon-google.png" alt="icon-google" />
          <span>Sign up with Google</span>
        </button>
        <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
          Or sign up with email
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <FormGroup>
            <Label htmlFor="fullname">Full Name*</Label>
            <Input
              control={control}
              name="fullname"
              placeholder={`${
                errors?.fullname?.message
                  ? errors?.fullname?.message
                  : "Jhon Doe"
              }`}
              error={errors.fullname?.message}
            ></Input>
          </FormGroup>
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
          <div className="flex items-start gap-5 mb-5">
            <Checkbox
              name="term"
              checked={acceptTerm}
              onChange={handleToggleTerm}
            >
              <p className="flex-1 text-xs lg:text-sm text-text2 select-none dark:text-text3">
                I agree to the{" "}
                <span className="underline text-secondary ">Terms of Use</span>{" "}
                and have read and understand the{" "}
                <span className="underline text-secondary">Privacy policy</span>
                .
              </p>
            </Checkbox>
          </div>
          <Button className="w-full bg-primary" type="submit" isLoading={false}>
            Create my account
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
