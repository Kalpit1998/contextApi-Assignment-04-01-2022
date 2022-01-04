import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

export const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1%",
    backgroundColor: "aquamarine",
    height: "15vh"
  };

  const imgWidth = {
    width: "6%",
  };

  const btnStyle = {
    fontSize: "1.5rem",
    padding: "2% 4%",
    border: "none",
    outline: "none",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  };

  const { isAuth, user, toggleIsAuth, img } = useContext(AuthContext);
  return (
    <div id="navbar" style={navStyle}>
      <img
        src="https://image.shutterstock.com/z/stock-vector-illustration-abstract-modern-infinity-logo-design-template-1920956690.jpg"
        alt="logo"
        style={imgWidth}
      />
      <div
        style={{
          display: "flex",
          width: "25%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "52%",
          }}
        >
          <img
            src={img}
            alt="avatar"
            style={{
              width: "30%",
              borderRadius: "52%",
              border: "3px solid azure",
            }}
          />
          <h3>{user}</h3>
        </div>

        <button style={btnStyle} onClick={toggleIsAuth}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};
