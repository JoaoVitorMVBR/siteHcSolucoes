'use client'
import Image from 'next/image';
import { useState, useEffect} from 'react';

interface GalleryImage {
  src: string;
  title?: string; // Opcional, pois nem todas as imagens precisam de título
}

const Gallery = () => {

    const images = [
        {
            src: '/images/galeria/WhatsApp Image 2025-06-13 at 19.17.54.jpeg',
            title: '',
        },
        {
            src: '/images/galeria/WhatsApp Image 2025-04-27 at 14.20.02.jpeg',
            title: '',
        },
        {
            src: '/images/galeria/WhatsApp Image 2025-04-27 at 14.20.02(1).jpeg',
            title: '',
        },
        {
            src: '/images/galeria/WhatsApp Image 2025-06-13 at 19.17.54 (1).jpeg',
            title: '',
        },
        {
            src: '/images/galeria/WhatsApp Image 2025-06-13 at 19.17.54 (2).jpeg',
            title: '',
        },
        {
            src: '/images/galeria/WhatsApp Image 2025-06-13 at 19.17.54 (3).jpeg',
            title: '',
        },

    ];

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const handleImageClick = (image:GalleryImage) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
    setSelectedImage(null);
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') handleCloseModal();
        };
        if (selectedImage) {
        window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [selectedImage]);

    return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Galeria de Fotos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
            <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(image)}
            >
                <div className="relative w-full h-64">
                <Image
                    src={image.src}
                    alt={image.title || `Foto ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                />
                </div>
                {image.title && (
                <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">
                    {image.title}
                </h3>
                )}
            </div>
            ))}
        </div>

        {/* Modal para visualizar a imagem */}
        {selectedImage && (
            <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleCloseModal}
            >
            <div
                className="relative bg-white rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no conteúdo
            >
                <button
                className="absolute top-2 right-2 text-gray-900 hover:text-gray-700 text-2xl"
                onClick={handleCloseModal}
                >
                &times;
                </button>
                <Image
                src={selectedImage.src}
                alt={selectedImage.title || 'Imagem ampliada'}
                width={800} // Ajuste conforme necessário
                height={600} // Ajuste conforme necessário
                className="object-contain rounded-lg"
                />
                {selectedImage.title && (
                <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">
                    {selectedImage.title}
                </h3>
                )}
            </div>
            </div>
        )}
        </div>
    </section>
    );
};

export default Gallery;