import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Hook/firebaseConfig";
import Swal from 'sweetalert2';


const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // console.log(email, password);

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        Swal.fire(
          'Good job!',
          'Login Success'
        );
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });

  };

  return (
    <div className="mt-5">
      <div className="main-container d-flex container justify-content-between align-items-center">
        <div className="register-image image-fluid w-100  ">
          <img
            className="w-100 img-fluid image-fluid"
            src="https://i.ibb.co/0hLvWvP/undraw-Login-re-4vu2.png"
            alt=""
          />
        </div>
        <div className="register-form  w-100">
          <p>{error}</p>
          <div className="input-box">
            <input onBlur={handleEmail}
              className="form-control p-3 m-2"
              type="email"
              placeholder="Email"
            />
            <input onBlur={handlePassword}
              className="form-control p-3 m-2"
              type="password"
              placeholder="password"
            />
            <p className="link ">
              <Link to="/registration" className="text-decoration-none">
                <small className="text-danger link">
                  are you new? please register
                </small>
              </Link>
              <span role="button" className="ms-4 text-primary cursor-pointer">
                Forget Password?
              </span>
            </p>
            <input className="p-2" type="checkbox" />{" "}
            <span className="mb-3 ">remember me </span>
            <br />
            <button onClick={handleLogin} className="btn btn-info p-3 w-50 mt-3 fw-bold text-white">
              Login
            </button>
          </div>
          <button className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto">
            <img
              className="w-25 image-fluid btn-image"
              src="https://img.icons8.com/color/344/google-logo.png"
              alt=""
            />
            <p className="fw-bold">Google SignIn</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
