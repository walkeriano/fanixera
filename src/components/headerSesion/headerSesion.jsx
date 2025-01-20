import React, { useState, useContext } from "react";
import AuthContext from "@/state/auth/auth-context";
import { useRouter } from "next/navigation";


export default function HeaderSesion(){
    const { logout } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = async () => {
        try {
          await logout(); 
          localStorage.removeItem("userProfile");
          console.log("Sesión cerrada con éxito");
          router.push("/");
        } catch (error) {
          console.error("Error al cerrar la sesión:", error.message);
        }
      };
    
    return(
        <section>
            <button onClick={handleLogout}>cerrar sesion</button>
        </section>
    )
}