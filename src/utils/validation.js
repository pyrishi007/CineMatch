import { REGEX } from "./constant/links";

const validation = (userMail, userPassword) => {
  const { emailRegex, passwordRegex } = REGEX;

  const isEmailValid = emailRegex.test(userMail);
  const isPasswordValid = passwordRegex.test(userPassword);

  if (!isEmailValid && !isPasswordValid) return "Invalid credentials";

  return null;
};

export default validation;
