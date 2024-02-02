import React from "react";

type Props = {};

const userProfile = ({ params }: any) => {
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen py-2 bg-cyan-200">
      <h1>Profile</h1>
      <hr />
      <p className="text-3xl">Profile {params.id}</p>
    </div>
  );
};

export default userProfile;
