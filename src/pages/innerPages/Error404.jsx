import React, { useEffect } from "react";
import HeaderV5 from "../../components/header/HeaderV5";
import Error404Content from "../../components/error404/Error404Content";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV3 from "../../components/header/HeaderV3";

const Error404 = () => {
  useEffect(() => {
    document.body.classList.add("bg-dark");

    return () => {
      document.body.classList.remove("bg-dark");
    };
  }, []);
  return (
    <>
      {/* <HeaderV3 logoColor={true} /> */}
      <Error404Content />
      {/* <FooterV1 /> */}
    </>
  );
};

export default Error404;
