import "../../styles/contactForm.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export function ContactForm() {
  const initialForm = {
    nombre: "",
    mail: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState(false);
  const [formData, setFormData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <form onSubmit={handleSubmit} action='/api/contacto' method="post" className="container-fluid bg-white border shadow rounded-3 contenedor_contacto">
      <div className="pb-2 text-center border-bottom border-2">
        <p className="h2 color_violet">Contacto</p>
      </div>
      <div>
        <input
          className="col-12 form-control h5 p-3 my-4"
          placeholder="Nombre"
          type="text"
          name="name"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="col-12 form-control h5 p-3 my-4"
          placeholder="Email"
          type="email"
          name="mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="col-12 form-control h5 p-3 my-4"
          placeholder="Telefono"
          type="tel"
          name="tel"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          className="col-12 form-control h5 p-3 my-4"
          placeholder="Consulta"
          type="text"
          name="coment"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>
      {sending ? <p>Enviando</p> : null}
      {msg ? <p>{msg}</p> : null}
      <div>
        <button className="col-12 text-white border-0 p-3 h5 rounded-3 contacto_button">
          Enviar
        </button>
      </div>
    </form>
  );
}
