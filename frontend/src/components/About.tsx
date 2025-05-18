// components/About.tsx
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen sm:min-h-[60vh] py-12 bg-[#FFFFFF]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen sm:min-h-[60vh] text-center">
        <h2 className="font-[roboto-standard] text-2xl sm:text-3xl md:text-4xl text-[#000000] mb-4 tracking-wide">
          Sobre a HC soluções
        </h2>
        <p className="font-[roboto-standard] text-base sm:text-lg md:text-xl text-[#000000] max-w-2xl px-4">
            O objetivo da HC Soluções é garantir a segurança e a saúde dos trabalhadores, independente de onde eles estiverem e a situação.. Oferecemos uma variedade de serviços, incluindo cursos, treinamentos segundo as principais Normas Regulamentadoras (NRs), capacitação em direção defensiva, preventiva e econômica, além de consultorias, assessorias e programas de sensibilização.

            Com uma equipe especializada e experiente, estamos comprometidos em fornecer soluções eficientes e personalizadas para atender às necessidades específicas de cada cliente.
        </p>
      </div>
    </section>
  );
};

export default About;