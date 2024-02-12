"use client";

import supabase from "@/supabase";
import { useRef, useState } from "react";

export default function Login() {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = new FormData(form.current);

    const email = loginData.get("email")
    const password = loginData.get("password")
    
    console.log("login data: ", loginData.get("password"))

    if (!signUp) {
      let {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        setErrorMessage(`Error: ${error}`);
      };
      
      setErrorMessage("");
      e.target.reset();
    } else {
      const confirmPassword = loginData.get("confirmPassword");

      if (password === confirmPassword) {
        let { data, error } = await supabase.auth.signUp({
          email: email,
          password: password
        });

        if (error) {
          setErrorMessage(`Error: ${error}`);
        };
        setErrorMessage("");
        e.target.reset();
      } else {
        setErrorMessage(`Passwords do not match`);
      };
    };
  };

  return (
    <section className="flex flex-col items-center text-center p-2">
      <h1 className="text-4xl font-bold mb-10">Login Page</h1>
      <div className="border-2 w-9/12 flex flex-col items-center">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          <label className="p-2 flex flex-col">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 border-amber-900 rounded-md ml-2 w-60"
              required
            />
          </label>
          <label className="p-2 flex flex-col">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-amber-900 rounded-md ml-2 w-60"
              required
            />
          </label>
          {signUp ? (
            <label className="p-2 flex flex-col">
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="border-2 border-amber-900 rounded-md ml-2 w-60"
                required
              />
            </label>
          ) : null}
          {!signUp ? (
            <input
              type="submit"
              value="Login"
              id="input-submit"
              className="border-2 border-amber-900 bg-amber-900 rounded-xl py-2 px-4 my-2 font-black text-white w-28"
            />
          ) : (
            <input
            type="submit"
            value="Sign Up"
            id="input-submit"
            className="border-2 border-amber-900 bg-amber-900 rounded-xl py-2 px-4 my-2 font-black text-white w-28"
          />
          )}
        </form>
        {!signUp && (<button
          className="border-2 border-amber-900 bg-amber-900 rounded-xl py-2 px-4 my-2 font-black text-white w-28"
          onClick={() => {
            setSignUp(true);
          }}
        >
          Sign Up
        </button>)}
        {signUp && (
          <button
            className="border-2 border-amber-900 bg-amber-900 rounded-xl py-2 px-4 my-2 font-black text-white w-28"
            onClick={() => {
              setSignUp(false);
            }}
          >
            Cancel
          </button>
        )}
              {errorMessage && <p className="font-bold text-red-700">{errorMessage}</p>}
      </div>
    </section>
  );
}
