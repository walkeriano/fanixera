import styles from "./formCreationAd.module.css";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTurnDown,
  faTriangleExclamation,
  faLocationCrosshairs,
  faCircleInfo,
  faCommentMedical,
  faPassport,
  faBullhorn,
  faArrowsToEye,
  faCirclePlay,
  faCircleStop,
  faImages,
  faMoneyBillTransfer,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import VisualizerCard from "@/components/visualizerCard/visualizerCard";
import usePromotionsForm from "@/state/hook/usePromotionsForm";
import AuthContext from "@/state/auth/auth-context";

export default function FormCreationAd() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const { onSubmit, loading } = usePromotionsForm(user);
  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);
  const [isUnlimited, setIsUnlimited] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const getMaxDate = (date) => {
    if (!date) return new Date(today).setDate(new Date(today).getDate() + 15);
    return new Date(date).setDate(new Date(date).getDate() + 15);
  };

  const handleUnlimitedStock = () => {
    setIsUnlimited((prev) => !prev);
    setValue("stock", isUnlimited ? "" : "ilimitado"); // Alternar entre vacío e ilimitado
  };

  // Obtener los valores del formulario que necesitamos mostrar en el visualizador
  const formValues = watch();

  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage1(imageUrl);
      setValue("image1", file);
    } else {
      setPreviewImage1(null); // Asegurar null en lugar de ""
      setValue("image1", null);
    }
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage2(imageUrl);
      setValue("image2", file);
    } else {
      setPreviewImage2(null); // Asegurar null en lugar de ""
      setValue("image2", null);
    }
  };

  const handleFormSubmit = async (data) => {
    const success = await onSubmit(data);

    if (success) {
      reset({
        title: "",
        description: "",
        ubication: "",
        terminosCondiciones: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        stock: "",
        image1: null,
        image2: null,
      });
      document.getElementById("imageOne").value = "";
      document.getElementById("imageTwo").value = "";
      setPreviewImage1(null);
      setPreviewImage2(null);
    }
  };

  return (
    <form
      className={styles.containerForm}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section className={styles.flextitleGeneral}>
        <h2 className={styles.titleContainer}>Creador de beneficios</h2>
        <section className={styles.titleFunction}>
          <h3>Total disponibles</h3>
          <div className={styles.totalCards}>
            <p>156</p>
            <FontAwesomeIcon
              icon={faTurnDown}
              size="2x"
              className={styles.icon}
            />
          </div>
        </section>
      </section>
      <section className={styles.generalInfoAd}>
        <section className={styles.titleAreaForm}>
          <h3>1. Detalles comerciales</h3>
          <FontAwesomeIcon
            icon={faBullhorn}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.boxFormGeneral}>
          <label htmlFor="">
            <input
              {...register("title", { required: "El título es obligatorio" })}
              type="text"
              placeholder="Titulo beneficio..."
            />
            <FontAwesomeIcon
              icon={faPassport}
              size="2x"
              className={styles.icon}
            />
          </label>
          {errors.title && (
            <p className={styles.error}>{errors.title.message}*</p>
          )}
          <label htmlFor="" className={styles.descriptionBox}>
            <textarea
              {...register("description", {
                required: "La descripción es obligatoria",
              })}
              type="text"
              placeholder="Descripción del beneficio..."
            />
            <FontAwesomeIcon
              icon={faCommentMedical}
              size="2x"
              className={styles.icon}
            />
          </label>
          {errors.description && (
            <p className={styles.error}>{errors.description.message}*</p>
          )}
          <label htmlFor="" className={styles.descriptionBox}>
            <textarea
              {...register("terminosCondiciones", {
                required: "Los términos son obligatorios",
              })}
              type="text"
              placeholder="Términos y Condiciones..."
            />
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="2x"
              className={styles.icon}
            />
          </label>
          {errors.terminosCondiciones && (
            <p className={styles.error}>
              {errors.terminosCondiciones.message}*
            </p>
          )}
          <label htmlFor="">
            <input
              {...register("ubication", {
                required: "La ubicación es obligatoria",
              })}
              type="text"
              placeholder="Ubicación..."
            />
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size="2x"
              className={styles.icon}
            />
          </label>
          {errors.ubication && (
            <p className={styles.error}>{errors.ubication.message}*</p>
          )}
        </section>
      </section>
      <section className={styles.tiempoExposicion}>
        <section className={styles.titleAreaForm}>
          <h3>2. Tiempo de exposición</h3>
          <FontAwesomeIcon
            icon={faArrowsToEye}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.itemTiempo}>
          <div className={styles.titleBoxTiempo}>
            <p>Inicia</p>
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="2x"
              className={styles.icon}
            />
          </div>
          <div className={styles.boxInputsDates}>
            <label>
              <input
                {...register("startDate", {
                  required: "Incompleto",
                })}
                type="date"
                min={today}
              />
              {errors.startDate && (
                <p className={styles.error}>{errors.startDate.message}*</p>
              )}
            </label>
            <label>
              <input
                {...register("startTime", {
                  required: "Incompleto",
                })}
                type="time"
              />
              {errors.startTime && (
                <p className={styles.error}>{errors.startTime.message}*</p>
              )}
            </label>
          </div>
        </section>
        <section className={styles.itemTiempo}>
          <div className={styles.titleBoxTiempo}>
            <p>Termina</p>
            <FontAwesomeIcon
              icon={faCircleStop}
              size="2x"
              className={styles.icon}
            />
          </div>
          <div className={styles.boxInputsDates}>
            <label>
              <input
                {...register("endDate", {
                  required: "Incompleto",
                  validate: (value) => {
                    const startDate = watch("startDate");
                    const maxDate = new Date(getMaxDate(startDate))
                      .toISOString()
                      .split("T")[0];
                    if (!startDate)
                      return "Seleccione primero la fecha de inicio";
                    if (value < startDate)
                      return "Debe ser mayor o igual a la fecha de inicio";
                    if (value > maxDate) return "Máximo 15 días de duración";
                    return true;
                  },
                })}
                type="date"
                min={watch("startDate") || today}
                max={
                  new Date(getMaxDate(watch("startDate")))
                    .toISOString()
                    .split("T")[0]
                }
              />
              {errors.endDate && (
                <p className={styles.error}>{errors.endDate.message}*</p>
              )}
            </label>
            <label>
              <input
                {...register("endTime", {
                  required: "Incompleto",
                })}
                type="time"
              />
              {errors.endTime && (
                <p className={styles.error}>{errors.endTime.message}*</p>
              )}
            </label>
          </div>
        </section>
        <section className={styles.alertMessage}>
          <p>Duración máxima de 15 días</p>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            size="2x"
            className={styles.icon}
          />
        </section>
      </section>
      <section className={styles.imagesFormatAds}>
        <section className={styles.titleAreaForm}>
          <h3>3. Contenido visual</h3>
          <FontAwesomeIcon icon={faImages} size="2x" className={styles.icon} />
        </section>
        <section className={styles.containerImageAd}>
          <section className={styles.flexAddImage}>
            <section className={styles.detallesFormat}>
              <div className={styles.titleSectionImage}>
                <h4>Vista principal</h4>
                <p>Formato: Vertical</p>
              </div>
              <div className={styles.iconInfo}>
                <Image
                  src="/format-hz.svg"
                  alt="hello world"
                  width={100}
                  height={190}
                />
                <div className={styles.extraFormats}>
                  <h4>350 px - 840 px</h4>
                  <p>Tamaño máximo 1MB</p>
                </div>
              </div>
            </section>
            <label htmlFor="imageOne" className={styles.fileImageAd}>
              <input
                type="file"
                id="imageOne"
                accept="image/*"
                hidden
                onChange={handleImage1Change}
              />
              {previewImage1 && (
                <img
                  src={previewImage1}
                  alt="Imagen subida 1"
                  className={styles.previewContainer}
                />
              )}
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
              <p>Adjuntar imagen...</p>
            </label>
          </section>
          <section className={styles.flexAddImage}>
            <section className={styles.detallesFormat}>
              <div className={styles.titleSectionImage}>
                <h4>Vista detalle</h4>
                <p>Formato: Cuadrado</p>
              </div>
              <div className={styles.iconInfo}>
                <Image
                  src="/format-vr.svg"
                  alt="hello world"
                  width={150}
                  height={150}
                />
                <div className={styles.extraFormats}>
                  <h4>840 px - 840 px</h4>
                  <p>Tamaño máximo 1MB</p>
                </div>
              </div>
            </section>
            <label htmlFor="imageTwo" className={styles.fileImageAd}>
              <input
                type="file"
                id="imageTwo"
                accept="image/*"
                onChange={handleImage2Change}
                hidden
              />
              {previewImage2 && (
                <img
                  src={previewImage2}
                  alt="Imagen subida 2"
                  className={styles.previewContainer}
                />
              )}
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
              <p>Adjuntar imagen...</p>
            </label>
          </section>
        </section>
      </section>
      <section className={styles.stockRegister}>
        <section className={styles.titleAreaForm}>
          <h3>4. Stock de beneficios</h3>
          <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.stockInput}>
          <label>
            <input
              {...register("stock", {
                required: "El stock es obligatorio",
                min: { value: 1, message: "El stock debe ser al menos 1" },
                validate: (value) =>
                  isUnlimited || parseInt(value) >= 1 || "Stock inválido",
              })}
              type="text"
              placeholder="00"
              disabled={isUnlimited}
            />
            {isUnlimited && (
              <FontAwesomeIcon
                icon={faInfinity}
                size="2x"
                className={styles.iconUnlimited}
              />
            )}
            <Image
              src="/mascot-white.png"
              alt="mascot-tomi"
              width={80}
              height={80}
            />
          </label>
          <button
            type="button"
            className={`${styles.stockIlimitado} ${
              isUnlimited ? styles.active : ""
            }`}
            onClick={handleUnlimitedStock}
          >
            <FontAwesomeIcon
              icon={faInfinity}
              size="2x"
              className={styles.icon}
            />
            {isUnlimited ? "Definir manualmente" : "Stock ilimitado"}
          </button>
          {errors.stock && (
            <p className={styles.error}>{errors.stock.message}*</p>
          )}
        </section>
      </section>
      <VisualizerCard formValues={formValues} user={user} />
      <button
        type="submit"
        disabled={loading}
        className={styles.btnAddBeneficio}
      >
        {loading ? "Guardando datos..." : "Crear beneficio"}
      </button>
    </form>
  );
}
