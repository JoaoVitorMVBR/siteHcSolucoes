'use client'

import Image from 'next/image'
import Link from 'next/link'

// Interface para cada produto
interface Product {
  id: number
  name: string
  price: string
  image: string
  slug: string
}

const ProductGrid: React.FC = () => {
  // Dados fictícios de produtos (substitua por seus dados reais)
  const products: Product[] = [
    {
      id: 1,
      name: 'Direção defensiva',
      price: 'R$ 599,90',
      image: '/images/cursos/direcao-defensiva.webp',
      slug: 'curso-lideranca-empresarial',
    },
    {
      id: 2,
      name: 'NR-11',
      price: 'R$ 799,90',
      image: '/images/cursos/nr-11.webp',
      slug: 'gestao-de-projetos-avancada',
    },
    {
      id: 3,
      name: 'NR-12',
      price: 'R$ 499,90',
      image: '/images/cursos/nr-12.webp',
      slug: 'marketing-digital-estrategico',
    },
    {
      id: 4,
      name: 'NR-20',
      price: 'R$ 599,90',
      image: '/images/cursos/nr-20.webp',
      slug: 'curso-lideranca-empresarial',
    },
    {
      id: 5,
      name: 'NR-35',
      price: 'R$ 799,90',
      image: '/images/cursos/nr-35.webp',
      slug: 'gestao-de-projetos-avancada',
    }
  ]

  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[roboto-standard] text-3xl md:text-4xl text-[#000000] text-center mb-8 tracking-wide">
          Nossos cursos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/produtos/${product.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain object-center"
                  quality={75}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-[roboto-standard] text-xl text-[#000000] mb-2 group-hover:text-[#100878] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-[roboto-standard] text-lg text-[#000000]">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid