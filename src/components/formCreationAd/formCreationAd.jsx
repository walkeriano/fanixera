import styles from "./formCreationAd.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faTriangleExclamation,
  faLocationCrosshairs,
  faCircleInfo,
  faCommentMedical,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import VisualizerCard from "@/components/visualizerCard/visualizerCard";
import usePromotionsForm from "@/state/hook/usePromotionsForm";

export default function FormCreationAd() {
  const { register, handleSubmit, setValue, reset, watch } = useForm();
  const { onSubmit, loading } = usePromotionsForm();
  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);

  // Obtener los valores del formulario que necesitamos mostrar en el visualizador
  const formValues = watch();

  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage1(imageUrl);
      setValue("image1", imageUrl); // Guarda la URL en el formulario
    } else {
      setPreviewImage1(null);
      setValue("image1", null);
    }
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage2(imageUrl);
      setValue("image2", imageUrl); // Guarda la URL en el formulario
    } else {
      setPreviewImage2(null);
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
      <section className={styles.generalInfoAd}>
        <section className={styles.titleAreaForm}>
          <h3>1. Datos generales</h3>
          <FontAwesomeIcon
            icon={faPassport}
            size="2x"
            className={styles.icon}
          />
        </section>

        <section className={styles.boxFormGeneral}>
          <label htmlFor="">
            <input
              {...register("title")}
              type="text"
              placeholder="Titulo beneficio..."
            />
            <FontAwesomeIcon
              icon={faPassport}
              size="2x"
              className={styles.icon}
            />
          </label>
          <label htmlFor="">
            <input
              {...register("description")}
              type="text"
              placeholder="Descripción beneficio..."
            />
            <FontAwesomeIcon
              icon={faCommentMedical}
              size="2x"
              className={styles.icon}
            />
          </label>
          <label htmlFor="">
            <input
              {...register("ubication")}
              type="text"
              placeholder="Ubicación..."
            />
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size="2x"
              className={styles.icon}
            />
          </label>
          <label htmlFor="">
            <input
              {...register("terminosCondiciones")}
              type="text"
              placeholder="Términos y Condiciones..."
            />
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="2x"
              className={styles.icon}
            />
          </label>
        </section>
      </section>
      <section className={styles.tiempoExposicion}>
        <section className={styles.titleAreaForm}>
          <h3>1. Datos generales</h3>
          <FontAwesomeIcon
            icon={faPassport}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.itemTiempo}>
          <p>Inicia:</p>
          <div className={styles.boxInputsDates}>
            <input {...register("startDate")} type="date" />
            <input {...register("startTime")} type="time" />
          </div>
        </section>
        <section className={styles.itemTiempo}>
          <p>Termina:</p>
          <div className={styles.boxInputsDates}>
            <input {...register("endDate")} type="date" />
            <input {...register("endTime")} type="time" />
          </div>
        </section>
        <section className={styles.alertMessage}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            size="2x"
            className={styles.icon}
          />
          <p>Tiempo máximo de 5 días - 52 horas</p>
        </section>
      </section>
      <section className={styles.imagesFormatAds}>
        <section className={styles.titleAreaForm}>
          <h3>1. Datos generales</h3>
          <FontAwesomeIcon
            icon={faPassport}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.containerImageAd}>
          <section className={styles.flexAddImage}>
            <section className={styles.detallesFormat}>
              <div className={styles.titleSectionImage}>
                <h4>Formato vertical</h4>
                <p>Wall principal</p>
              </div>
              <div className={styles.iconInfo}>
                <Image
                  src="/format-hz.svg"
                  alt="hello world"
                  width={60}
                  height={120}
                />
                <p>350px - 840px</p>
                <p>Tamaño máximo 1mb</p>
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
              {previewImage1 ? (
                <Image
                  src={previewImage1}
                  alt="Imagen subida 1"
                  fill={true}
                  className={styles.previewContainer}
                />
              ) : null}
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
                <h4>Formato vertical</h4>
                <p>wall principal</p>
              </div>
              <div className={styles.iconInfo}>
                <Image
                  src="/format-vr.svg"
                  alt="hello world"
                  width={80}
                  height={80}
                />
                <p>350px - 840px</p>
                <p>Tamaño máximo 1mb</p>
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
              {previewImage2 ? (
                <Image
                  src={previewImage2}
                  alt="Imagen subida 2"
                  fill={true}
                  className={styles.previewContainer}
                />
              ) : null}
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
          <h3>1. Datos generales</h3>
          <FontAwesomeIcon
            icon={faPassport}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.stockInput}>
          <label>
            <input
              {...register("stock")}
              type="number"
              placeholder="escribir aqui..."
            />
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="2x"
              className={styles.icon}
            />
          </label>
          <button className={styles.stockIlimitado}>
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="2x"
              className={styles.icon}
            />
            Stock ilimitado
          </button>
        </section>
      </section>
      <VisualizerCard formValues={formValues} />
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
