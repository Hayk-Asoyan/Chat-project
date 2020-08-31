import React from 'react';
import {Route} from "react-router-dom"


import "./auth.scss"
import {Loginform, RegisterForm} from "./../../modules";

const Auth = () => {

    return (
        <section className="auth">
            <div className="auth_content">


                <Route exact path={["/", "/login"]} component={Loginform} />
                <Route exact path="/register" component={RegisterForm} />
            </div>
        </section>
    );
};

export default Auth;