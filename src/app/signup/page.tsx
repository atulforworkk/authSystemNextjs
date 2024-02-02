"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
type Props = {};

const signup = (props: Props) => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("🚀 ~ onSignUp ~ response:", response.data);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen py-2 bg-cyan-200">
      <h1>{loading ? "processing" : "Signup"}</h1>
      <hr />
      <div className=" flex flex-col">
        <label htmlFor="userName">username</label>
        <input
          className="p-2"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          placeholder="username"
        />
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
        <Button className="mt-2" onClick={onSignUp}>
          {buttonDisabled ? "No Signup" : "Signup"}
        </Button>
      </div>
      <Link href="/login" className="mt-2">
        Visit Login Page
      </Link>
    </div>
  );
};

export default signup;
