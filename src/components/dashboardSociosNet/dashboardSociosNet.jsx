import React, { useState, useEffect, useContext } from "react";
import styles from "./dashboardSociosNet.module.css";
import AuthContext from "@/state/auth/auth-context";



export default function DashboardSociosNet(){
    const { user } = useContext(AuthContext);



    return(
        <section className={styles.containerDashboard}>
            <div>{user?.email}</div>
            <div></div>
        </section>
    )
}