import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/Context.js';

const LoginModel = () => {
    const {Login} = useContext(AuthContext);
    const history = useHistory();

    const handleLogin = () => {
        const UserName = "admin";
        const Password = "admin123";

        axios.post('https://api-erpadmin.jmmtest.xyz/api/Authentication', { UserName, Password }).then(res => {
            Login(res);
            history.push("/dashboard");
        });
    };

    

    return (
        <>
            <div id="myModal" class="modal">

                {/* <!-- Modal content --> */}
                <div class="modal-content">
                    <span class="close">&times;</span>

                    <div style={{ textAlign: "center" }}>

                        <div class="login-width">
                            <img src="./resources/images/logo_login.png" alt="" />
                            <p>to submit a photo, Login</p>
                            <button class="fb-btn fb-button">
                                <i class="bi bi-facebook iconFb"></i>
                                Facebook
                            </button>
                            <br />
                            <p>OR</p>
                            <form class="login-model-form" action="index.html" method="post" id="login-popup">
                                <label for="" style={{ textAlign: "start" }}>Email</label>
                                <input type="email" name="" value="" required />
                                <br />
                                <br />
                                <label for="">Password <a href="#">Forgot your password?</a> </label>

                                <input type="password" name="" value="" required />
                                <br />
                                <br />

                                <button type="submit" onClick={handleLogin} name="button" class="login-submit-btn">Login</button>


                                <p>Don't have an account? <a href="./signUp.html">Join</a> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginModel;