// components/WhyRentDress.tsx
const Whyget: React.FC = () => {
    const reasons = [
      {
        title: 'Economia',
        description: 'Alugar um vestido é muito mais acessível do que comprar, permitindo que você use peças de alta qualidade sem comprometer seu orçamento.',
      },
      {
        title: 'Sustentabilidade',
        description: 'Ao alugar, você contribui para a moda consciente, reduzindo o desperdício e promovendo o reuso de peças únicas.',
      },
      {
        title: 'Exclusividade',
        description: 'Tenha acesso a vestidos exclusivos e sob medida para ocasiões especiais, sem a necessidade de armazenamento permanente.',
      },
      {
        title: 'Praticidade',
        description: 'Alugue, use e devolva! Sem preocupações com manutenção ou espaço no guarda-roupa após o evento.',
      },
    ];
  
    return (
      <section className="py-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[roboto-standard] text-3xl text-[#000000] text-center mb-8 tracking-wide">
            Por que contratar os nossos serviços?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-[#100878] rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="font-[roboto-standard] text-xl text-[#000000] mb-2">
                  {reason.title}
                </h3>
                <p className="font-[roboto-standard] text-gray-700 text-sm sm:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Whyget;