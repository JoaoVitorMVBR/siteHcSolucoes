'use client';

import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseHC: React.FC = () => {
  const benefits = [
    'Diminuição das faltas dos colaboradores',
    'Certeza de mão de obra qualificada',
    'Projeção de uma imagem corporativa que prioriza seus funcionários',
    'Segurança de todos garantida',
    'Preservação da vida e saúde mental dos seus funcionários',
    'Garantia de mais produção com menos custos',
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-[roboto-standard] text-gray-800 text-center mb-8">
          Por que escolher a HC Soluções
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
            >
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
              <p className="text-gray-700 text-base md:text-lg font-medium">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHC;