type validate = "username" | "email" | "password";

const regexUsername = /^[A-Za-z0-9]{3,16}$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword =
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

export function validate(text: string, validate: validate) {
  switch (validate) {
    case "username":
      return regexUsername.test(text);
    case "email":
      return regexEmail.test(text);
    case "password":
      return regexPassword.test(text);
    default:
      break;
  }
}
