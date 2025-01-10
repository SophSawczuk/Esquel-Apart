import React, { useEffect } from "react";

const ReceptionWidget = () => {
  useEffect(() => {
    // Crear la etiqueta <script>
    const script = document.createElement("script");
    script.className = "kas_online_reception";
    script.src = "https://wubook.net/js/nebk/bwidget.jgz";
    script.dataset.wid = "eeec0ba1-376c-4469-8ecb-3618da123aa5";
    script.async = true;

    // Agregarlo al <body> o a un contenedor específico
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="kas_online_reception"></div>;
};

export default ReceptionWidget;


