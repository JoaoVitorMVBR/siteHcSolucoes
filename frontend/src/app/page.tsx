// app/page.tsx
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/BannerHero';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';
import Whychose from '@/components/whyChose';
import SocialProof from '@/components/SocialProof';
import WppFloat from '@/components/wppFloat';
import About from '@/components/About';
import WhyNotchose from '@/components/whyNotChose';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        <HeroBanner />
        <Highlights />
        <Whychose />
        <About />
        <SocialProof />
        <WhyNotchose /> 
        <WppFloat />
      </main>

      {/* Rodapé */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}