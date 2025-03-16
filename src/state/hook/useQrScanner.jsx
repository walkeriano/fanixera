"use client";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export function useQrScanner() {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    let scanner;

    if (scanning) {
      scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      });

      scanner.render(
        (decodedText) => {
          scanner.clear();
          setScanning(false);

          if (decodedText.startsWith("http")) {
            window.location.href = decodedText;
          } else {
            alert(`Código escaneado: ${decodedText}`);
          }
        },
        (error) => console.warn(error)
      );
    }

    return () => {
      if (scanner) scanner.clear();
    };
  }, [scanning]);

  return { scanning, setScanning };
}