import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AuthContext from "@/state/auth/auth-context";
import styles from "./formRegistro.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";


export default function FormRegistro() {
  const { user, register: registerUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setErrorMessage("");
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        createdAt: new Date(),
      });
      console.log("Registro exitoso");
      router.push("/explicacion");
    } catch (err) {
      const error = handleFirebaseError(err);
      setErrorMessage(error);
    }
  };

  return (
    <section className={styles.containerRegistro}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.boxInput}>
          <label>Email de acceso:</label>
          <input
            type="email"
            placeholder="Escribir aqui.."
            className={
              touchedFields.email
                ? errors.email
                  ? styles.invalid
                  : styles.valid
                : ""
            }
            {...register("email", {
              required: "El email es obligatorio*",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email no es válido",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.boxInput}>
          <label>Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Escribir aqui.."
            className={
              touchedFields.password
                ? errors.password
                  ? styles.invalid
                  : styles.valid
                : ""
            }
            {...register("password", {
              required: "La contraseña es obligatoria*",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "La contraseña debe contener letras y números",
              },
            })}
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)} // Alterna la visibilidad
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={styles.icon}
            />
          </button>
          <p className={styles.indication}>
            *Mínimo 6 carácteres entre números y letras
          </p>
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className={styles.btnAcces}>
          Registrar
          <span>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="2x"
              className={styles.icon}
            />
          </span>
        </button>
      </form>
    </section>
  );
}
