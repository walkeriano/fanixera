import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AuthContext from "@/state/auth/auth-context";
import styles from "./formRegistro.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAt,
  faEyeSlash,
  faEye,
  faStore
} from "@fortawesome/free-solid-svg-icons";

export default function FormRegistro() {
  const { register: registerUser } = useContext(AuthContext);
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
        nombreMarca: data.nombreMarca,
        userType: "brand",
      });
      console.log("Registro exitoso");
      router.push("/registro-socios-net");
    } catch (err) {
      const error = handleFirebaseError(err);
      setErrorMessage(error);
    }
  };

  return (
    <section className={styles.containerForm}>
      <section className={styles.titleAcces}>
        <h2>Registrar cuenta</h2>
        <p>Crear credenciales de marca</p>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formularioRegistro}
      >
        <label>
          <input
            type="text"
            placeholder="Nombre de la marca..."
            className={
              touchedFields.nombreMarca
                ? errors.nombreMarca
                  ? styles.invalid
                  : styles.valid
                : ""
            }
            {...register("nombreMarca", {
              required: "El nombre de la marca es obligatorio*",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
          />
          <FontAwesomeIcon icon={faStore} size="2x" className={styles.icon} />
        </label>
        {errors.nombreMarca && (
          <span className={styles.error}>{errors.nombreMarca.message}</span>
        )}
        <label>
          <input
            type="email"
            placeholder="Email de acceso..."
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
          <FontAwesomeIcon icon={faAt} size="2x" className={styles.icon} />
        </label>
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nueva contraseña..."
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
          <div
            className={styles.btnShowPassword}
            onClick={() => setShowPassword(!showPassword)} // Alterna la visibilidad
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size="2x"
              className={styles.iconPasword}
            />
          </div>
        </label>
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
        <p className={styles.indication}>
          *Mínimo 6 carácteres entre números y letras
        </p>
        <button type="submit" className={styles.btnAction}>
          Registrar
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </button>
      </form>
    </section>
  );
}
