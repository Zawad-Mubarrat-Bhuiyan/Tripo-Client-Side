import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
      const { signInGoogle } = useAuth();
      const location = useLocation();
      const history = useHistory();
      const redirect_uri = location.state?.from || '/home'
      const signInHandeler = () => {
            signInGoogle()
                  .then((result) => {
                        history.push(redirect_uri)
                  })
      }
      return (
            <div className="container">
                  <div >
                        <h2 className="text-center fw-bold text-primary">LOGIN HERE</h2>
                        <h6>Sign In With Google</h6>
                        <button className="btn btn-white" onClick={signInHandeler}><i className="fab fa-google text-primary fs-2"></i></button>
                  </div>
            </div>
      );
};

export default Login;