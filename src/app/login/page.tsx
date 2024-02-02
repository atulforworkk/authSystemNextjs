"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
type Props = {};

const Login = (props: Props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen py-2 bg-cyan-200">
      <h1>Login</h1>
      <hr />
      <div className=" flex flex-col">
        <label htmlFor="email">email</label>
        <input
          className="p-2"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="username"
        />
        <label htmlFor="userName">password</label>
        <input
          className="p-2"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="password"
        />
        <Button className="mt-2" onClick={onLogin}>
          Sign Up
        </Button>
      </div>
      <Link href="/signup" className="mt-2">
        Visit Sign Up page
      </Link>
    </div>
  );
};

export default Login;
