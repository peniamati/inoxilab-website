'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Configuración de EmailJS
    emailjs.send(
      'inoxilab_website',  // ID del servicio, obténlo de tu cuenta de EmailJS
      'template_qt2gop7', // ID de la plantilla, obténlo de tu cuenta de EmailJS
      formData,
      'Tl1zwtGUNz9mAbOZ3'      // ID de usuario, obténlo de tu cuenta de EmailJS
    )
    .then((response) => {
      setIsSending(false);
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Tu mensaje ha sido enviado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    })
    .catch((error) => {
      setIsSending(false);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error. Inténtalo nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.error('Error al enviar el correo:', error);
    });
  };

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-3xl font-bold text-center mb-8">Contáctanos</h1>
      
      <div className="max-w-4xl mx-auto p-8 rounded-lg shadow- bg-[#fcf6fa]">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>

          <div className="text-center mb-4">
            {status && <p className="text-lg font-semibold">{status}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSending}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isSending ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
