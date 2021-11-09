import {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/Context.js';

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { token, isLogin } = useContext(AuthContext);

    return (
        <Route {...rest} render={
            (props) => {
                if (isLogin() && token !== null) {
                    console.log(isLogin());
                    return <Component {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: { from: props.location }
                        }
                    } />
                }
            }}


        />
    )

}