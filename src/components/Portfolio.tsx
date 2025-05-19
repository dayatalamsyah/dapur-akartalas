// components/Portfolio.tsx
export default function Portfolio() {
  return (
    <section id="portfolio" 
    className="text-[#5a1d17] pt-50 min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>

      <h2 className="text-[#5a1d17] text-3xl font-bold text-center mb-6">Portofolio</h2>
      <p className="text-[#5a1d17] text-center mb-10 max-w-2xl mx-auto">
        Berikut adalah beberapa klien dan acara yang telah kami layani.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Contoh item portofolio */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img
            src="/images/portfolio1.jpg"
            alt="Portofolio 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-[#5a1d17] text-lg font-semibold">Acara Pernikahan - Jakarta</h3>
            <p className="text-[#5a1d17] text-sm">Paket catering lengkap 500 pax</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img
            src="/images/portfolio2.jpg"
            alt="Portofolio 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-[#5a1d17] text-lg font-semibold">Gathering Perusahaan</h3>
            <p className="text-[#5a1d17] text-sm">Lunch buffet untuk 150 karyawan</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <img
            src="/images/portfolio3.jpg"
            alt="Portofolio 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-[#5a1d17] text-lg font-semibold">Ulang Tahun Anak</h3>
            <p className="text-[#5a1d17] text-sm">Mini buffet dan dessert table</p>
          </div>
        </div>
      </div>
    </section>
  );
}
