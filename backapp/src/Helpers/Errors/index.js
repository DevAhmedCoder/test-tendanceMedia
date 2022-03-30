let errors = { email: "", password: "", message: "" };
export const handleErrors = (err) => {
  // incorrect email--------------------
  if (err.message === "incorrect email") {
    errors.email = "Check your email adresse";
    return errors;
  }

  if (err.message === "!Token expired") {
    errors.email = "Session expired !, please check your mailbox";
    return errors;
  }

  if (err.message === "isBanned") {
    errors.message = "Please contact the administrator";
    return errors;
  }
  if (err.message === "Email is active") {
    errors.message = "Email is active , signin please";
    return errors;
  }

  if (err.errors?.email && !err.errors.email.properties.validator()) {
    errors.email = "Please enter a valid email";
    return errors;
  }
  if (err.code === 11000) {
    errors.email = "That email is already used";
    return errors;
  }
  // incorrect password-------------------------
  if (err.message === "incorrect password") {
    errors.password = "Password is incorrect";
    return errors;
  }
  if (err.errors?.password && !err.errors.password.properties.validator()) {
    errors.password = "Please enter a valid password";
    return errors;
  }

  // find ser by id
  if (err.message.includes("Cast to ObjectId failed")) {
    errors.email = `That _id:${err.value} dose not existe`;
    return errors;
  }

  // not confirmed email

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    return errors;
  }

  // Signup errors
  if (err.message.includes("not defined")) {
    errors.message = err.message;
    return errors;
  }
};
