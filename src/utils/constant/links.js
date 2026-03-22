export const AUTH_IMG =
  "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg";

export const AUTH_CONTEXT = {
  authImgDesc: {
    title: "CineMatch",
    description:
      "Find movies you'll truly enjoy with smart recommendations, save them to your watchlist, and keep your  cinema journey organized in one beautiful place.",
  },
  auth: {
    signIN: {
      type: "Sign In",
      title_1: "Enter your email and password",
      title_2: "Create account",
      title_3: "No account yet?",
      changeto: "Sign up",
    },
    signUP: {
      type: "Sign up",
      title_1: "Enter your details below",
      title_2: "Create account",
      title_3: "Already have an account?",
      changeto: "Sign in",
    },
  },
};

export const REGEX = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
  fullNameRegex: /^[A-Za-z ]{2,}$/,
};
