"use client";
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/state/auth/auth-context";
import styles from "./page.module.css";
import Head from "next/head";
import HeaderSesion from "@/components/headerSesion/headerSesion";
import Footer from "@/components/footer/footer";
import AdminDashboard from "@/components/adminDashboard/adminDashboard";

export default function PrivateAccess() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.userType === "client") {
        router.replace("/"); // Redirige al home si es client
      }
    } else {
      router.replace("/"); // Redirige al home si no hay usuario autenticado
    }
  }, [user, router]);

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
      <main className={styles.main}>
        <HeaderSesion />
        <AdminDashboard/>
        <Footer />
        <div className={styles.blurBlue}></div>
      </main>
    </>
  );
}
