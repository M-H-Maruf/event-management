import { useContext, useRef } from "react";
import { AuthContext } from "./../../hooks/AuthProvider";
import { BsGoogle } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Particle from "./../home/Particle";

const LogIn = () => {
  const {
    signInWithEmail,
    signInWithGoogle,
  } = useContext(AuthContext);
  

  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef(null);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    // Password Verification
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must be at least 6 characters long",
      });
      return;
    }
    
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must contain at least one capital letter",
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        icon: "error",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2500,
        text: "Password must contain at least one special character",
      });
      return;
    }

    signInWithEmail(email, password)
      .then((result) => {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Success!",
          text: "Sign In Succeeded",
          showConfirmButton: false,
          timer: 2500,
        });
        
        console.log(result);
        navigate(location?.state ? location.state : '/');
        
      })
      .catch((error) => {
        let errorSignIn ='';
        console.log(error.code);
        if (error.code == 'auth/invalid-login-credentials') {
          errorSignIn = "Email or password doesn't match"
        }
        else {
          errorSignIn = error.code;
        }
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong.\n"+ errorSignIn,
          showConfirmButton: false,
          timer: 2500,
        });
        
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Success!",
          text: "Sign Up Succeeded With Google",
          showConfirmButton: false,
          timer: 2500,
        });
        
        navigate(location?.state ? location.state : '/');
        
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Error!",
          text: "Oops! Something went wrong",
          showConfirmButton: false,
          timer: 2500,
        });
        
      });
  };

  // const handleForgotPassword = () => {
  //   const email = emailRef.current.value;
  //   let errorText = "";
  //   if (!email) {
  //     errorText = "Please enter your email address";
  //   } else if (
  //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
  //   ) {
  //     errorText = "Please enter a valid email address";
  //   }
  //   if (errorText) {
  //     Swal.fire({
  //       position: "bottom-end",
  //       icon: "error",
  //       title: "INVALID EMAIL!",
  //       text: errorText,
  //       showConfirmButton: false,
  //       timer: 2500,
  //     });
  //   } else passwordReset(email);
  // };

  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/VYM4s3t/matteo-vistocco-Dph00-R2-Sw-Fo-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center pb-36 pt-28 tracking-normal text-justify">
      <div className="z-10">
        <h1
          data-aos="fade-down"
          className="text-6xl text-event-primary font-black font-orbitron mb-20 text-center mx-auto"
        >
          SIGN IN
        </h1>

        <div
          data-aos="zoom-in"
          className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10"
        >
          <form onSubmit={handleLogIn} className="flex flex-col gap-8">
            
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 items-start md:gap-10">
              <label className="w-28 text-left md:justify-self-end">
                <span className="label-text text-white text-lg font-bold">
                  Email :{" "}
                </span>
              </label>
              <input
                type="email"
                required
                ref={emailRef}
                name="email"
                placeholder="Email"
                className="bg-white/30 p-3 rounded border border-gray-300 w-64"
              />
            </div>
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 items-start md:gap-10">
              <label className="w-28 text-left md:justify-self-end">
                <span className="label-text text-white text-lg font-bold">
                  Password :{" "}
                </span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="bg-white/30 p-3 rounded border border-gray-300 w-64"
              />
            </div>
            {/* <a
              onClick={handleForgotPassword}
              className="label-text text-event-primary hover:text-white text-lg font-bold-alt link link-hover hover:underline"
            >
              Forgot password?
            </a> */}

            <div className="form-control -mt-6">
              <button className="btn glass text-white hover:text-event-secondary">
                Sign In
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full glass group text-white hover:text-event-secondary"
          >
            Sign In With Google
            <BsGoogle className="px-1 group-hover:text-event-secondary text-white w-10"></BsGoogle>
          </button>
          <p className="text-center mt-2">
            {" "}
            New to this site? Please{" "}
            <Link to="/register">
              <button className="text-event-primary hover:text-white text-lg font-bold-alt link link-hover hover:underline px-0">
                Sign Up
              </button>
            </Link>{" "}
          </p>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default LogIn;
