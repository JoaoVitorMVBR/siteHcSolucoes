// components/SocialProof.tsx
'use client';

// import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Elson',
      text: 'Muito boa sua palestra de hoje!',
      rating: 5,
    },
    {
      name: 'Moisés',
      text: 'Seria bom falar com vocês o dia todo para aprender mais! Várias pessoas me mandaram mensagem falando que foi muito bom.',
      rating: 5,
    },
    {
      name: 'Jefferson',
      text: 'Muito top seu treinamento. Obrigado!',
      rating: 4,
    },
  ];

  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[roboto-standard] text-3xl text-[#000000] text-center mb-8 tracking-wide">
          O que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#100878] rounded-lg p-6 shadow-md text-center flex flex-col items-center"
            >
              <div className="relative w-16 h-16 mb-4">
              </div>
              <h3 className="font-[roboto-standard] text-xl text-[#000000]">
                {testimonial.name}
              </h3>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={
                      starIndex < testimonial.rating
                        ? 'text-[#100878]'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <p className="font-[roboto-standard] text-gray-700 text-sm sm:text-base">
                {`"${testimonial.text}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;