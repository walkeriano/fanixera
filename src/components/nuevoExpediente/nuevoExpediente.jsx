import React, { useState, useEffect, useContext } from "react";
import styles from "./nuevoExpediente.module.css";
import AuthContext from "@/state/auth/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faStore,
  faAt,
  faFingerprint,
  faImage,
  faCamera,
  faTriangleExclamation,
  faFileShield,
  faListOl,
  faCommentMedical,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import useSubmitExpediente from "@/state/hook/useSubmitExpediente";

export default function NuevoExpediente() {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, errors, loading, success, error, onSubmit } =
    useSubmitExpediente(user);

  return (
    <section className={styles.containerExpediente}>
      <section className={styles.identidadUsuario}>
        <Image
          src="/mascot-blue.png"
          alt="icon-mascot"
          width={180}
          height={180}
          className={styles.imgMoney}
        />
        <h2>
          Exclente! <span>Ahora puedes crear beneficios para tus clientes</span>
        </h2>
        <p className={styles.pId}>
          Registra el expediente de tu marca para comenzar
        </p>
        <section className={styles.idExpediente}>
          <section className={styles.titleSection}>
            <h3>1. Identidad de marca</h3>
            <FontAwesomeIcon
              icon={faFingerprint}
              size="2x"
              className={styles.icon}
            />
          </section>
          <section className={styles.boxVerifyUser}>
            <div className={styles.itemVerify}>
              <div className={styles.flexDescription}>
                <FontAwesomeIcon
                  icon={faStore}
                  size="2x"
                  className={styles.icon}
                />
                <p>Nombre comercial</p>
              </div>
              <h3>{user?.email}</h3>
            </div>
            <div className={styles.itemVerify}>
              <div className={styles.flexDescription}>
                <FontAwesomeIcon
                  icon={faAt}
                  size="2x"
                  className={styles.icon}
                />
                <p>Email de acceso</p>
              </div>
              <h3>{user?.email}</h3>
            </div>
          </section>
        </section>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.boxForm}>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>2. Imagen de perfil</h3>
            <FontAwesomeIcon icon={faImage} size="2x" className={styles.icon} />
          </section>
          <section className={styles.imagePerfil}>
            <input type="file" {...register("image", { required: true })} />
            <FontAwesomeIcon
              icon={faCamera}
              size="2x"
              className={styles.icon}
            />
            <p>Adjuntar aqui...</p>
          </section>
          <section className={styles.boxDetalles}>
            <div className={styles.notificación}>
              <h4>Campo vacío</h4>
              {errors.image && <p>Este campo es obligatorio.</p>}
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p>Formato JPG o PNG</p>
            <p>Tamaño máx. 1MB</p>
          </section>
        </section>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>3. Datos informativos</h3>
            <FontAwesomeIcon
              icon={faFileShield}
              size="2x"
              className={styles.icon}
            />
          </section>
          <section className={styles.flexInputs}>
            <label>
              <input
                {...register("ruc", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "El RUC debe contener solo números.",
                  },
                })}
                placeholder="Nº de Ruc empresarial..."
              />
              <FontAwesomeIcon
                icon={faListOl}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.ruc && <p>{errors.ruc.message}</p>}
            <label>
              <input
                {...register("categoria", { required: true })}
                placeholder="Categoría..."
              />
              <FontAwesomeIcon
                icon={faLink}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.categoria && <p>Este campo es obligatorio.</p>}
            <label>
              <input
                {...register("descripcion", { required: true })}
                placeholder="Descripción..."
              />
              <FontAwesomeIcon
                icon={faCommentMedical}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.descripcion && <p>Este campo es obligatorio.</p>}
          </section>
        </section>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>3. Canales de contacto</h3>
            <FontAwesomeIcon
              icon={faLocationArrow}
              size="2x"
              className={styles.icon}
            />
          </section>
          <section className={styles.flexInputs}>
            <label>
              <input
                type="text"
                placeholder="Sitio web..."
                {...register("sitioWeb", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*(\?.*)?$/,
                    message: "Por favor ingresa una URL válida.",
                  },
                })}
              />
              <FontAwesomeIcon
                icon={faLink}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.sitioWeb && <p>{errors.sitioWeb.message}</p>}
            <label>
              <input
                type="text"
                {...register("facebook", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*(\?.*)?$/,
                    message: "Por favor ingresa una URL válida.",
                  },
                })}
                placeholder="Facebook..."
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.facebook && <p>{errors.facebook.message}</p>}
            <label>
              <input
                type="text"
                {...register("instagram", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*(\?.*)?$/,
                    message: "Por favor ingresa una URL válida.",
                  },
                })}
                placeholder="Instagram..."
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.instagram && <p>{errors.instagram.message}</p>}
            <label>
              <input
                type="text"
                {...register("tiktok", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*(\?.*)?$/,
                    message: "Por favor ingresa una URL válida.",
                  },
                })}
                placeholder="Tiktok..."
              />
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className={styles.icon}
              />
            </label>
            {errors.tiktok && <p>{errors.tiktok.message}</p>}
          </section>
        </section>
        {success && <p>¡Expediente registrado con éxito!</p>}
        {error && <p>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={styles.btnSendExpediente}
        >
          {loading ? "Cargando datos..." : "Registrar expediente"}
          <FontAwesomeIcon icon={faStore} size="2x" className={styles.icon} />
        </button>
      </form>
    </section>
  );
}
