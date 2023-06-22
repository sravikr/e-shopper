import React, { useContext, useState } from "react";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";
import { userContext } from "../../context/UserContext";
export const Header = () => {
  const context = useContext(userContext);
  console.log(context);
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
    </>
  );
};
