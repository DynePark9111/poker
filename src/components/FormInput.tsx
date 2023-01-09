import styles from "../styles/FormInput.module.scss";
import { useState } from "react";

type FormInputProps = {
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  required: boolean;
  values: {};
  setValues: any;
};

export default function FormInput(props: FormInputProps) {
  const { label, errorMessage, setValues, values, name, ...inputProps } = props;
  const [blur, setBlur] = useState(false);

  return (
    <div className={styles.FormInput}>
      <label>{label}</label>
      <input
        className={blur ? styles.blur : ""}
        {...inputProps}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        onBlur={() => setBlur(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
