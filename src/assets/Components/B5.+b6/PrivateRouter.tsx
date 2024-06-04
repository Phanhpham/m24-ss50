import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const [check, setCheck] = useState(true);
  return <>{check === true ? <Outlet /> : <Navigate to={"/login"} />}</>;
}
