"use client";
import React from "react";
import styles from "./page.module.css";
import Head from "next/head";
import DashboardSociosNet from "@/components/dashboardSociosNet/dashboardSociosNet";
import HeaderSesion from "@/components/headerSesion/headerSesion";


export default function PerfilSociosNet() {

    
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Quesada Coach App - Planes de entrenamiento y nutrición personalizados
          creados por expertos
        </title>
        <meta
          name="description"
          content="Descubre Quesada Coach App, Planes de entrenamiento y nutrición personalizados creados por
            expertos, diseñados para transformar tu cuerpo y tu vida"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <HeaderSesion />
        <DashboardSociosNet />
      </main>
    </>
  );
}
