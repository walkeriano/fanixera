import styles from "./qrButton.module.css";
import { useQrScanner } from "@/state/hook/useQrScanner";

export default function QrButton() {
  const { scanning, setScanning } = useQrScanner();

  return (
    <div className={styles.containerScanner}>
      {scanning ? (
        <div id="reader" className={styles.camSpace}></div>
      ) : (
        <button onClick={() => setScanning(true)} className={styles.btnScan}>
          Escanear Código QR
        </button>
      )}
    </div>
  );
}
