import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "@/state/auth/auth-context";
import styles from "./formAccesSociosNet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAt,
  faEyeSlash,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function FormAccesSociosNet() {
  const { user, login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      router.push("/perfil-socios-net");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.containerForm}>
      <section className={styles.titleAcces}>
        <h2>Iniciar sesión</h2>
        <p>Ingresar credenciales de marca</p>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formularioRegistro}
      >
        <label>
          <input
            type="text"
            placeholder="Email de acceso..."
            className={
              touchedFields.email
                ? errors.email
                  ? styles.invalid
                  : styles.valid
                : ""
            }
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email no es válido",
              },
            })}
          />
          <FontAwesomeIcon icon={faAt} size="2x" className={styles.icon} />
        </label>
        {errors.email && (
          <span className={styles.error}>{errors.email.message}*</span>
        )}
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña..."
            className={
              touchedFields.password
                ? errors.password
                  ? styles.invalid
                  : styles.valid
                : ""
            }
            {...register("password", {
              required: "La contraseña es obligatoria",
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
          <div onClick={() => setShowPassword(!showPassword)} className={styles.btnShowPassword}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} size="2x" className={styles.iconPasword} />
          </div>
          
        </label>
        <p className={styles.indication}>
            *Mínimo 6 carácteres entre números y letras
          </p>
        {errors.password && (
          <span className={styles.error}>{errors.password.message}*</span>
        )}
        {error && <span className={styles.error}>{error}</span>}
        <button  type="submit" className={styles.btnAction}>
          Ingresar
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
