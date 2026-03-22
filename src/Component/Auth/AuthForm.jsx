import React, { useState } from "react";
import { AUTH_IMG, AUTH_CONTEXT } from "@/utils/constant/links";
import { useRef } from "react";
import validation from "@/utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "@/utils/firebaseSDK";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const mail = useRef();
  const password = useRef();

  const context = isSignUp
    ? AUTH_CONTEXT.auth.signUP
    : AUTH_CONTEXT.auth.signIN;

  const handleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleClick = () => {
    const validate = validation(mail.current.value, password.current.value);
    setErrorMessage(validate);

    if (validate) return;

    //Auth
    if (isSignUp) {
      //Sign UP
      createUserWithEmailAndPassword(
        auth,
        mail.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      //Sign IN
      signInWithEmailAndPassword(
        auth,
        mail.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900/80 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        <div className="relative hidden md:flex w-full max-w-md items-center justify-center rounded-2xl overflow-hidden">
          <img
            src={AUTH_IMG}
            alt="auth visual"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/50" />

          <div className="relative px-8 text-center text-white space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight">
              {AUTH_CONTEXT.title}
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
              {AUTH_CONTEXT.description}
            </p>
          </div>
        </div>

        <div className="p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-1">
            {isSignUp ? "Sign up" : "Sign in"}
          </h2>

          <p className="text-slate-500 text-sm mb-6">
            {isSignUp ? context.title_1 : context.title_1}
          </p>

          <div className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none text-sm"
              />
            )}

            <input
              ref={mail}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none text-sm"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none text-sm"
            />
            <div className="text-start">
              <p className="ml-4 text-red-500 font-medium tracking-wide text-[12px]  ">
                {errorMessage}
              </p>
            </div>

            <button
              type="submit"
              onClick={handleClick}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2.5 rounded-lg text-sm font-medium transition"
            >
              {isSignUp ? context.type : context.type}
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            {isSignUp ? context.title_3 : context.title_3}

            <button
              onClick={handleForm}
              className="ml-1 text-purple-700 font-medium hover:underline hover:text-purple-900"
            >
              {isSignUp ? context.changeto : context.changeto}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
