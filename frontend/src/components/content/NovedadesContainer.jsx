import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NovedadesCard } from "./NovedadesCard";
import "../../styles/novedadesContainer.css";

export function NovedadesContainer() {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  const cargarNovedades = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:3000/api/novedades");
    setNovedades(response.data);
    setLoading(false);
  };

  useEffect(() => {
    cargarNovedades();
  }, []);

  return (
    <>
            {console.log(novedades)}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="container-fluid justify-content-center row contenedor_novedades">
          {novedades.map((novedad) => {
            return (
              <NovedadesCard
                key={novedad.id}
                title={novedad.titulo}
                subtitle={novedad.subtitulo}
                text={novedad.cuerpo}
                image={novedad.imagen}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
