import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState("Guest");
    const [img, setImg] = useState("https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png");
    const [status, setStatus] = useState("Not logged in");

    const toggleIsAuth = () => {
        if(isAuth === false){
            fetch("https://reqres.in/api/users/2").then((res) => res.json()).then((res) => {setUser(res.data.first_name + " " + res.data.last_name); setStatus(`Logged in as ${res.data.first_name} ${res.data.last_name}`); setImg(res.data.avatar)});
            setIsAuth(true);
        }
        else if(isAuth === true){
            setIsAuth(false);
            setUser("Guest");
            setImg("https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png");
            setStatus("Not logged in");
        }
    }
    return (
        <AuthContext.Provider value={{isAuth, toggleIsAuth, user, img, status}}>{children}</AuthContext.Provider>
    )
}