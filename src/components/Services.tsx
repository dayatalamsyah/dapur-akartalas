// src/components/Services.tsx
import {
  Cake,
  UtensilsCrossed,
  Salad,
  Soup,
  Users,
  Briefcase,
  ShoppingCart,
  Coffee,
  Pizza,
  PartyPopper,
} from "lucide-react";

const services = [
  {
    title: "Katering Harian",
    description: "Menu sehat & bergizi untuk kebutuhan makan siang harian Anda.",
    icon: <UtensilsCrossed size={32} />,
  },
  {
    title: "Katering Acara",
    description: "Layanan untuk acara keluarga, ulang tahun, atau hajatan.",
    icon: <PartyPopper size={32} />,
  },
  {
    title: "Katering Pernikahan",
    description: "Hidangan istimewa untuk momen paling spesial dalam hidup Anda.",
    icon: <Cake size={32} />,
  },
  {
    title: "Katering Kantor",
    description: "Paket katering harian/bulanan untuk kebutuhan perusahaan & instansi.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Snack Box & Coffee Break",
    description: "Pilihan snack berkualitas untuk rapat, seminar, atau event kantor.",
    icon: <Coffee size={32} />,
  },
  {
    title: "Menu Diet & Sehat",
    description: "Pilihan menu rendah kalori, seimbang, dan bernutrisi.",
    icon: <Salad size={32} />,
  },
  {
    title: "Prasmanan / Buffet",
    description: "Setup prasmanan profesional untuk berbagai skala acara.",
    icon: <Soup size={32} />,
  },
  {
    title: "Katering Arisan",
    description: "Pilihan menu lezat dan hemat untuk arisan keluarga & komunitas.",
    icon: <Users size={32} />,
  },
  {
    title: "Paket Nasi Box",
    description: "Nasi kotak ekonomis & premium dengan beragam pilihan lauk.",
    icon: <ShoppingCart size={32} />,
  },
  {
    title: "Catering Internasional",
    description: "Hidangan western, asian, dan fusion dengan citarasa autentik.",
    icon: <Pizza size={32} />,
  },
];


export default function Services() {
  return (
   <section id="layanan" 
  className="pt-50 min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
       <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5a1d17]">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-[#5a1d17]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}