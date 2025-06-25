// components/Highlights.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const Highlights: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Direção defensiva',
      description: 'Na prática',
      image: '/images/cursos/direcao-defensiva.webp',
      slug: 'curso-lideranca-empresarial',
      link: 'https://go.hotmart.com/M81295000X'
    },
    {
      id: 2,
      name: 'NR-11',
      description: 'Operador de empilhadeira',
      image: '/images/cursos/nr-11.webp',
      slug: 'gestao-de-projetos-avancada',
      link: 'https://go.hotmart.com/N89417188X'      
    },
    {
      id: 3,
      name: 'NR-12',
      description: 'Máquinas e Equipamentos',
      image: '/images/cursos/nr-12.webp',
      slug: 'marketing-digital-estrategico',
      link: 'https://go.hotmart.com/Q89566962B'
    },
    {
      id: 4,
      name: 'NR-20',
      description: 'Combustíveis e Inflamáveis',
      image: '/images/cursos/nr-20.webp',
      slug: 'curso-lideranca-empresarial',
      link: 'https://go.hotmart.com/M89430173P?dp=1'
    },
    {
      id: 5,
      name: 'NR-35',
      description: 'Trabalho em Altura',
      image: '/images/cursos/nr-35.webp',
      slug: 'gestao-de-projetos-avancada',
      link: 'https://go.hotmart.com/R89967397Q'
    }
  ];

  return (
    <section id="cursos" className="py-12 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[roboto-standard] text-3xl text-[#000000] text-center mb-12 tracking-wide">
          Principais treinamentos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.link}
              // href={`/cursos/${course.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#100878]"
            >
              <div className="relative w-full h-64">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover object-center"
                  quality={75}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-[roboto-standard] text-xl text-[#000000] mb-2 group-hover:text-[#100878] transition-colors duration-300">
                  {course.name}
                </h3>
                <p className="font-[roboto-standard] text-lg text-[#000000]">
                  {course.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;