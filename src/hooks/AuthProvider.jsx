import { createContext, useEffect } from "react";
import app from "./../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { PropTypes } from "prop-types";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState('https://i.ibb.co/MVzMp2j/istockphoto-1307140504-612x612.jpg');
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  // register with email
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update username and photo url
  const updateNameAndPhotoUrl = (name, url) =>{
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url
    }).then(() => {
      
    }).catch(() => {
      
    });
  }

  // password reset
  const passwordReset = email =>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Success!",
      text: "Password Reset Mail Sent To Your Email",
      showConfirmButton: false,
      timer: 2500,
    });
  })
  .catch((error) => {
    Swal.fire({
      position: "bottom-end",
      icon: "error",
      title: "Error!",
      text: "Oops! Password Reset Failed",
      showConfirmButton: false,
      timer: 2500,
    });
    console.error(error);
  });
  }

  // log in with email
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handle authentication with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // monitoring user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        
        setUser(currentUser);
        setLoading(false);
        
    });
    return () => {
        unSubscribe();
    }
}, [])

  //json data of services
  useEffect(() => {
    fetch("/data/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // providing info
  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    updateNameAndPhotoUrl,
    passwordReset,
    signInWithGoogle,
    signInWithEmail,
    profileImage,
    setProfileImage,
    logOut,
    services,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
