import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="sobre" className="relative w-full min-h-screen flex items-center justify-center bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Div com a imagem */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <Image
            src="/images/about/img1.jpeg"
            alt="Imagem Sobre Nós"
            width={300}
            height={300}
            className="object-cover rounded-lg shadow-md w-full h-auto"
          />
        </div>

        {/* Div com o texto */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Sobre Nós
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-md">
              O objetivo da HC Soluções é garantir a segurança e a saúde dos trabalhadores, independente de onde eles estiverem e a situação.. Oferecemos uma variedade de serviços, incluindo cursos, treinamentos segundo as principais Normas Regulamentadoras (NRs), capacitação em direção defensiva, preventiva e econômica, além de consultorias, assessorias e programas de sensibilização.
              Com uma equipe especializada e experiente, estamos comprometidos em fornecer soluções eficientes e personalizadas para atender às necessidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
