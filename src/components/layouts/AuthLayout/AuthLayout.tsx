import PageHead from "@/components/commons/PageHead";
import React, { ReactNode } from "react";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const AuthLayout = (props: PropTypes) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container">{children}</section>
    </>
  );
};

export default AuthLayout;
