import { useContext } from "react";
import {AuthContext} from "../context/Authcontext"

export const Status = () => {
  const {status} = useContext(AuthContext)  
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 15vh)",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "antiquewhite",
      }}
    >
      <h1>{status}</h1>
    </div>
  );
};
