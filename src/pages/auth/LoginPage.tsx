import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { AlertContext } from "../../contexts/AlertContext";
import { UserContext } from "../../contexts/UserContext";
import styles from "../../styles/pages/auth/LoginPage.module.scss";
import { validate } from "../../utils/auth";

export default function LoginPage() {
  const URL = import.meta.env.VITE_URL;

  const { addAlert } = useContext(AlertContext);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const disabled = () => {
    return !(
      validate(values.email, "email") && validate(values.password, "password")
    );
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${URL}/auth/login`, values, {
        withCredentials: true,
      });
      if (res.status === 200) {
        const { _id, username, email, gem, cash } = res.data;
        addAlert(`Hello, ${username}`, "success");
        login(_id, username, email, gem, cash);
        navigate("/");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        addAlert(err.response?.data.error, "error");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div className={styles.LoginPage}>
      <form onSubmit={(e) => e.preventDefault()}>
        {LOGIN_FORM.map((input) => (
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
        <div
          className={styles.findpw}
          onClick={() => addAlert("Under development", "error")}
        >
          Find password
        </div>
        <button
          type="submit"
          onClick={() => handleSubmit()}
          disabled={disabled()}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

const LOGIN_FORM = [
  {
    id: 0,
    name: "email",
    type: "email",
    placeholder: "email@gmail.com",
    errorMessage: "Enter a valid email.",
    label: "Email",
    required: true,
  },
  {
    id: 1,
    name: "password",
    type: "password",
    placeholder: "********",
    errorMessage: "8~20 characters. require letter, number, special character.",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];
