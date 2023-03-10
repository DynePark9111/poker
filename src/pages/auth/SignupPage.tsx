import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { AlertContext } from "../../contexts/AlertContext";
import styles from "../../styles/pages/auth/SignupPage.module.scss";
import { validate } from "../../utils/auth";

export default function SignupPage() {
  const URL = import.meta.env.VITE_URL;
  const navigate = useNavigate();
  const { addAlert } = useContext(AlertContext);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const SIGNUP_FORM = [
    {
      id: 0,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "3~16 characters. with no special characters.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "username@gmail.com",
      errorMessage: "Enter a valid email.",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "********",
      errorMessage:
        "8~20 characters. require letter, number, special character.",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      errorMessage: "Passwords don't match",
      label: "Confirm password",
      pattern: values.password, // FIX : can't move this array to bottom because of this line.
      required: true,
    },
  ];

  async function handleSubmit() {
    try {
      const res = await axios.post(`${URL}/auth/signup`, { ...values });
      if (res.status === 201) {
        addAlert("Sign up Successful!", "success");
        navigate("/auth/login");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        addAlert(err.response?.data.error, "error");
      } else {
        console.log(err);
      }
    }
  }

  function isDisabled() {
    return !(
      validate(values.username, "username") &&
      validate(values.email, "email") &&
      validate(values.password, "password") &&
      values.password === values.confirmPassword
    );
  }

  return (
    <div className={styles.SignupPage}>
      <form onSubmit={(e) => e.preventDefault()}>
        {SIGNUP_FORM.map((input) => (
          <FormInput
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            errorMessage={input.errorMessage}
            label={input.label}
            pattern={input.pattern}
            required={input.required}
            values={values}
            setValues={setValues}
          />
        ))}
        <button
          type="submit"
          onClick={() => handleSubmit()}
          disabled={isDisabled()}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}
