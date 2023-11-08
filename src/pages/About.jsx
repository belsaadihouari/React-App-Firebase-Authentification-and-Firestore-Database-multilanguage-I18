import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from "../comp/Loading";

import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Erroe404 from "../pages/erroe404";

const About = () => {
  const inputElement = useRef(null);

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

 

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Erroe404 />;
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>About Page</title>
          </Helmet>
          <Header />
          <main>
            <button
              className="delete"
              onClick={(eo) => {
              inputElement.current.focus()
              }}
            >
              click
            </button>

            <input ref={inputElement} className="alii" type="text" name="" id="svfjrt" />
          </main>
          <Footer />
        </>
      );
    }
  }
};

export default About;
