import { useState, useEffect } from "react";
import { db } from "../../../firebase-config"; // Asegúrate de importar tu configuración de Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

const useUserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (!params || !params.slug) return;

    const slug = params.slug;

    // Verificar si ya existe en localStorage
    const storedBrands = JSON.parse(localStorage.getItem("brandsViews")) || [];
    const cachedBrand = storedBrands.find((brand) => brand.slug === slug);

    if (cachedBrand) {
      console.log(`⚡ Cargando ${slug} desde localStorage`);
      setUserData(cachedBrand);
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        setLoading(true);

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0].data();
          setUserData(userDoc);

          // Guardar en localStorage
          const updatedBrands = [...storedBrands, userDoc];
          localStorage.setItem("brandsViews", JSON.stringify(updatedBrands));
          console.log(`✅ Guardado ${slug} en localStorage`);
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