import React from "react";

const Street = () => {
  return (
   
      <div style={{
        backgroundColor: "#a9a9a9", // color del asfalto
        height: "150px", // altura del asfalto
        width: "80%", // ancho del asfalto
        position: "absolute", // para posicionar en la calle
        top: "50%", // para centrar verticalmente
        left: "50%", // para centrar horizontalmente
        transform: "translate(-50%, -50%)", // para centrar completamente
        zIndex: "1" // para colocarlo detrás de otros elementos
      }}></div>
   
  );
}

export default Street;