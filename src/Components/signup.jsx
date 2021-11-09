import React from 'react';

const Signup = () => {
    return (
        <>
            <section className="sign-up-flex">

                <div className="side-img" style={{ background: "url(Resources/Images//signup_Full)" }}>
                    <div className="">
                        <div className="side-img-content">
                            <img src="images/logo.png" alt="" />
                            <h2>Creation Start Here</h2>
                            <p>Access 3,285,140 free high resolution photos you can't find anywhere else</p>
                        </div>
                    </div>
                </div>

                <div className="sign-up">
                    <div className="form-div">
                        <h1>Join Unsplash</h1>
                        <p>Already have an account? <a href="a">Login</a></p>
                        <button type="button " name="button" className="fb-btn"> <span><i
                            className="bi bi-facebook"></i></span> Join Using Facebook</button>
                        <p>OR</p>
                        <form className="flex-form" action="index.html" method="post">
                            <div className="flex justify-Content-around">
                                <div className="user-name">
                                    <label htmlFor=" ">First Name</label><br />
                                    <input type="text " name=" " value=" " required />
                                </div>
                                <div className="user-name ">
                                    <label htmlFor=" ">Last Name</label><br />
                                    <input type="text " name=" " value=" " required />
                                </div>
                            </div>
                            <br />
                            <div className=" ">
                                <label htmlFor=" ">Email Address</label><br />
                                <input type="email " name=" " value=" " required />
                            </div>
                            <br />
                            <div className=" ">
                                <label htmlFor=" ">User Name</label><br />
                                <input type="text " name=" " value=" " required />
                            </div>
                            <br />
                            <div className=" ">
                                <label htmlFor=" ">Password</label><br />
                                <input type="password " name=" " value=" " />
                            </div>
                            <br />
                            <div className=" ">
                                <input type="submit " name=" " value="Join " />
                            </div>
                        </form>
                        <p>By Joining you agree to the <a href="a ">Terms</a> and <a href="a ">Privacy Policy</a></p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Signup;