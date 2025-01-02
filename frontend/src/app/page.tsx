"use client";

import Link from "next/link";
import { useState } from "react";

import { loginUser } from "@/lib/auth";
import CardGradient from "@/components/CardGradient";

enum LoginState {
  LoggedIn = "loggegIn",
  LoggedOut = "loggedOut",
  Processing = "Processing...",
}

export default function Home() {
  const [loginState, setLoginState] = useState<LoginState>(LoginState.LoggedOut);

  const handleLogin = async () => {
    if (loginState === LoginState.Processing) return;

    setLoginState(LoginState.Processing);

    if (loginState === LoginState.LoggedIn) {
      // Log user out      
      setLoginState(LoginState.LoggedOut);
    } else {
      // Log user in
      const response = await loginUser({ email: "matej@ads.com", password: "testtest" })

      if (response.token) {
        console.log(response.token);
        setLoginState(LoginState.LoggedIn);
      } else {
        alert(response.error);
        setLoginState(LoginState.LoggedOut);
      }
    }
  }

  let buttonText;
  if (loginState === LoginState.LoggedIn) {
    buttonText = "Logout";
  } else if (loginState === LoginState.LoggedOut) {
    buttonText = "Login";
  } else {
    buttonText = "Processing...";
  }

  return (
    <div className="flex flex-row items-stretch justify-items-center min-h-screen gap-8 pt-8 pb-8 pr-8">
      <main className="flex flex-1">
        <CardGradient>
          <button className="btn" onClick={handleLogin}>
            {buttonText}
          </button>
          <h2>Predefined Characters:</h2>
          <ul>
            <li>
              <Link href="/chat/1">Chat with Character One</Link>
            </li>
            <li>
              <Link href="/chat/2">Chat with Character Two</Link>
            </li>
          </ul>
        </CardGradient>
      </main>
      <div className="flex flex-col gap-8 items-center sm:items-start flex-0">
        <CardGradient>
          aaaaaaaaaaaaaaaaaaaaa
        </CardGradient>
        <CardGradient>
          bbbbbbbbbb
        </CardGradient>
      </div>
    </div >
  );
}
