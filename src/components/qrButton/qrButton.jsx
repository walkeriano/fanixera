import { useQrScanner } from "@/state/hook/useQrScanner";

export default function QrButton() {
  const { scanning, setScanning } = useQrScanner();

  return (
    <div className="hello">
      <button
        onClick={() => setScanning(true)}
      >
        Escanear Código QR
      </button>
      {scanning && <div id="reader" className="mt-4"></div>}
    </div>
  );
}