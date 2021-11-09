import { useState, createContext } from 'react';
export const AuthContext = createContext();

function AuthContextprovider(props) {

    const [user, setUser] = useState(null);



    function Login(res) {
        
        setUser({userName: res.userName, token: res.token});
    }

    const isLogin = (res) => user ? true : false;

    function isLogout() {
        setUser({userName: null, token: null});
    }

    

    const values = { user, Login, isLogout, isLogin };

    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextprovider;