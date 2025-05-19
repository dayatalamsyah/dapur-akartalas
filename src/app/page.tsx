import Header from '@/components/Header';
import About from "@/components/About"; 
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section
        className="min-h-screen bg-no-repeat bg-right-top bg-contain"
        style={{
          backgroundImage: "url('/images/background.png')",
          paddingTop: '70px',
          paddingBottom: '70px',
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 md:px-0">
          {/* Gambar Kiri */}
          <div className="pt-6 w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/images/hero-image.png"
              alt="Dapur Akartalas"
              className="object-contain
                w-[220px]        // MOBILE
                sm:w-[300px]     // SMALL TABLET
                md:w-[600px]     // DESKTOP
              "
            />
          </div>

          {/* Teks Kanan */}
          <div className="w-full md:w-1/2 text-left mt-6 md:mt-0 px-2 md:px-0">
            <h1 className="
              text-3xl         // MOBILE
              sm:text-4xl 
              md:text-5xl pt-13     // DESKTOP
              font-extrabold 
              text-[#5a1d17] 
              leading-tight 
              drop-shadow-sm
            ">
              Sajian Lezat & Berkelas dari <br className="hidden md:block" />
              Dapur Akartalas Catering
            </h1>
            <p className="
              mt-4 
              text-base        // MOBILE
              sm:text-lg 
              md:text-xl       // DESKTOP
              text-[#5a1d17]  
              font-medium
            ">
              Melayani katering harian, acara spesial, hingga kebutuhan kantor dengan sentuhan cita rasa
              rumahan yang higienis dan berkualitas. Cocok untuk arisan, pernikahan, meeting, & syukuran.
            </p>
            <a
              href="https://wa.me/6285219292992"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 
                inline-block 
                bg-green-500 
                text-white 
                font-semibold 
                py-3 px-6 
                rounded-full 
                shadow 
                hover:bg-green-600 
                transition 
                duration-300
              "
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
 
    </main>
  );
}
