// components/Contact.tsx
'use client';

import { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário (ex.: API)
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[roboto-standard] text-3xl md:text-4xl text-[#032970] text-center mb-8 tracking-wide">
          Fale Conosco
        </h2>

        <div className="flex justify-center">
          {/* Formulário com tamanho fixo */}
          <div className="bg-white border border-[#032970] rounded-lg p-6 shadow-md w-[400px] max-w-[90%] mx-auto min-h-[400px] flex flex-col justify-between">
            {submitted ? (
              <p className="text-[#641311] text-center text-lg flex-grow flex items-center justify-center">
                Obrigado por sua mensagem! Entraremos em contato em breve.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-[roboto-standard] block text-[#032970] mb-2 text-sm sm:text-base"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#032970] rounded-md focus:outline-none focus:ring-2 focus:ring-[#000] text-gray-700 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-[roboto-standard] block text-[#032970] mb-2 text-sm sm:text-base"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={ formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#032970] rounded-md focus:outline-none focus:ring-2 focus:ring-[#000] text-gray-700 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="font-[roboto-standard] block text-[#032970] mb-2 text-sm sm:text-base"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#032970] rounded-md focus:outline-none focus:ring-2 focus:ring-[#000] text-gray-700 resize-y min-h-[100px] text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="font-[roboto-standard] w-full bg-[#032970] text-white py-2 rounded-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;