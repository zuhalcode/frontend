import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/Register";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthLayout title="GoVent | Register">
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
