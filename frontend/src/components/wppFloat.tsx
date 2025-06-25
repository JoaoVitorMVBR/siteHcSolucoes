import Image from 'next/image';

const wppFloat = () => {
  return (
    <a
      href="https://wa.me/5531999383852?text=Olá,%20tenho%20uma%20pergunta%20sobre%20os%20treinamentos"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={40}
        height={40}
      />
    </a>
  );
};

export default wppFloat;