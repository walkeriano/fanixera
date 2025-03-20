import { useState, useEffect } from "react";
import { db } from "../../../firebase-config"; // Asegúrate de importar tu configuración de Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

const useUserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams(); // Obtiene los parámetros dinámicos de la URL
  
    useEffect(() => {
      if (!params || !params.nombreMarca) return; // Esperamos a que params esté disponible
      const nombreMarca = params.nombreMarca;
  
      const fetchUserProfile = async () => {
        try {
          setLoading(true);
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("nombreMarca", "==", nombreMarca));
          const querySnapshot = await getDocs(q);
  
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0].data();
            setUserData(userDoc);
          } else {
            setUserData(null);
          }
        } catch (err) {
          setError("Error al obtener el perfil");
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserProfile();
    }, [params]);
  
    return { userData, loading, error };
  };
  
  export default useUserProfile;