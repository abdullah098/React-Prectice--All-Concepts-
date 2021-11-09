import { useState, createContext } from 'react';
export const AuthContext = createContext();

function AuthContextprovider(props) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);



    const Login = (res) => {
        
        setUser({userName: res.userName, token: res.token});
        setToken(res.token);
        window.sessionStorage.setItem("token",  res.data.token);
    }

    const isLogin = (res) => user ? true : false;
    
    const LogOut = () => {
        setUser({userName: null, token: null});
        setToken(null);
        window.sessionStorage.clear();
    }



    

    const values = { user, token, Login, LogOut, isLogin };

    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextprovider;