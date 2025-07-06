import styles from "./totalUsers.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStore,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import useUsersAll from "@/state/hook/useUsersAll";
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";

export default function TotalUsers({ type }) {
  const { promotions: users, loading } = useUsersAll();

  // Filtrar usuarios según el tipo
  const filteredUsers = users.filter((user) => user.userType === type);

  return (
    <section className={styles.totalBeneficios}>
      <section className={styles.titleBox}>
        <div className={styles.titleDescription}>
          <p>{type === "brand" ? "Marcas" : "Clientes"} activos</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <section className={styles.totalBox}>
          <p>{loading ? "..." : filteredUsers.length}</p>
          {type === "brand" ? (
            <FontAwesomeIcon icon={faStore} size="2x" className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
          )}
        </section>
      </section>
      <section className={styles.listItem}>
        {loading ? (
          <div className={styles.boxLoading}>
            <LoaderSpecific />
          </div>
        ) : filteredUsers.length === 0 ? (
          <p>No hay usuarios.</p>
        ) : (
          filteredUsers.map((user) => (
            <section key={user.id} className={styles.itemUser}>
              <div className={styles.imageUser}>
                <Image
                  src={user?.expediente?.imageUrl || "/prom.png"}
                  alt="foto usuario"
                  fill
                />
              </div>
              <div className={styles.infoItemUser}>
                <h4>{user?.nombreMarca || "Sin nombre"}</h4>
                <h3>{user?.userType}</h3>
                <section className={styles.infoContain}>
                  {type === "brand" ? (
                    <p>{user?.expediente?.category}</p>
                  ) : (
                    <p>{user?.cel}</p>
                  )}
                  <p>{user?.email}</p>
                  {type === "brand" ? <p>{user.ruc}</p> : <p>{user.uid}</p>}
                </section>
              </div>
            </section>
          ))
        )}
      </section>
    </section>
  );
}
