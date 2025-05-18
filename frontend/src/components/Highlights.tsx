// components/Highlights.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const Highlights: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'Treinamento comportamental',
      price: 'R$ 599,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'curso-lideranca-empresarial',
    },
    {
      id: 2,
      name: 'Direção defensiva',
      price: 'R$ 799,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'gestao-de-projetos-avancada',
    },
    {
      id: 3,
      name: 'NR 6',
      price: 'R$ 499,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'marketing-digital-estrategico',
    },
    {
      id: 1,
      name: 'Instalações e Serviços em Eletricidade',
      price: 'R$ 599,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'curso-lideranca-empresarial',
    },
    {
      id: 2,
      name: 'NR 35',
      price: 'R$ 799,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'gestao-de-projetos-avancada',
    },
    {
      id: 3,
      name: 'Trabalho em Altura',
      price: 'R$ 499,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'marketing-digital-estrategico',
    },
    {
      id: 1,
      name: 'NR 11',
      price: 'R$ 599,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'curso-lideranca-empresarial',
    },
    {
      id: 2,
      name: 'Operador de empilhadeira',
      price: 'R$ 799,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'gestao-de-projetos-avancada',
    },
    {
      id: 3,
      name: 'NR 12',
      price: 'R$ 499,90',
      image: '/images/cursos/direcaodefensiva.jpg',
      slug: 'marketing-digital-estrategico',
    },
  ];

  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[roboto-standard] text-3xl text-[#000000] text-center mb-12 tracking-wide">
          Cursos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/cursos/${course.slug}`}
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
                  {course.price}
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