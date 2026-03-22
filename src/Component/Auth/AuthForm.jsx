import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <Card className="max-w-5xl w-full shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="relative hidden md:flex flex-col justify-center px-12 text-white bg-gradient-to-br from-indigo-500 to-purple-600">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
            }}
          />

          <div className="relative z-10 space-y-6">
            <h1 className="text-4xl font-bold">Welcome to CineWatch 🎬</h1>

            <p className="text-lg leading-relaxed">
              Discover trending movies, build your personal watchlist, and
              explore cinema from around the world. CineWatch helps you track
              everything you love about films in one beautiful place.
            </p>

            <p className="opacity-90">
              Join thousands of movie lovers who organize their favorites,
              discover hidden gems, and stay updated with the latest releases
              every day.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <CardContent className="p-10 md:p-14">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">CineWatch</h2>
            <p className="text-gray-500 mt-2">
              Continue your cinematic journey or create a new account to start
              exploring movies.
            </p>
          </div>

          {/* TOGGLE BUTTONS */}
          <div className="flex mb-6 bg-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setIsSignIn(true)}
              className={`w-1/2 py-2 font-medium transition ${
                isSignIn
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setIsSignIn(false)}
              className={`w-1/2 py-2 font-medium transition ${
                !isSignIn
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* SIGN IN FORM */}
          {isSignIn ? (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl">
                Sign In
              </Button>

              <p className="text-sm text-gray-400 text-center">
                Forgot your password? Reset it anytime securely.
              </p>
            </form>
          ) : (
            /* SIGN UP FORM */
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="password"
                placeholder="Create Password"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl">
                Create Account
              </Button>

              <p className="text-sm text-gray-400 text-center">
                Start building your personal movie watchlist today with
                CineWatch.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


export default AuthPage;
