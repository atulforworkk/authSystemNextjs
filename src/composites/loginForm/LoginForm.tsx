"use client";
import React from "react";
import PreAuthInput from "@/components/ui/input/PreAuthInput";
import { Button } from "@/components/ui/button";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
type Props = {};

const validationSchema = Yup.object().shape({
  username: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});
const LoginForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    //       username: "ankur@kditsolutions.com",
    //       password: "Kdit2023!",
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        ...values,
        trigger: true,
      };

      // const res = await dispatch(login(payload));

      // if (!login.rejected.match(res)) {
      //   return successCallBack();
      // }
    },
  });
  const { values, handleSubmit, setFieldValue } = formik;
  console.log("🚀 ~ LoginForm ~ values:", values);
  return (
    <div className="h-[80vh] bg-main flex justify-center items-center">
      <FormikProvider value={formik}>
        <form className="min-w-[400px]" onSubmit={handleSubmit} noValidate>
          <h2 className="mb-5 text-center font-sf-bold text-xl font-bold">
            SIGN IN
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <PreAuthInput
              label="Email Address"
              type="email"
              name="username"
              inputSize="medium"
            />

            <PreAuthInput
              label="Enter Password"
              type="password"
              name="password"
              inputSize="medium"
            />
            {/* <Link to="/forgot-password" className="">Forgot Password?</Link> */}
            <div className="flex items-center justify-between ">
              {/* <Link to="/forgot-password">Forgot Password?</Link> */}
            </div>
            <label className="flex items-center" htmlFor="checkbox">
              {/* <input
                className="mr-2 drop-shadow-md"
                type="checkbox"
                checked={values.rememberMe}
                onChange={handleRememberMe}
                id="checkbox"
              /> */}
              remember my Password
            </label>
            <Button type="submit">Sign In</Button>
          </div>
          <h3 className="m-5 text-center">
            Not a Member ?
            <span className="font-semibold text-blue-color ">
              <Link href="/signup"> Register Now </Link>
              {/* <Link></Link> */}
            </span>
          </h3>
        </form>
      </FormikProvider>
    </div>
  );
};

export default LoginForm;
