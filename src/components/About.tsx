export default function About() {
  return (
    <section
      id="tentang"

      className="pt-46 min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-[#5a1d17] text-4xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Dapur Akartalas Catering</strong> adalah penyedia layanan katering
            terpercaya yang menghadirkan cita rasa istimewa untuk setiap momen Anda.
            Dengan pengalaman dan dedikasi tinggi, kami siap memenuhi kebutuhan
            kuliner untuk acara pribadi maupun perusahaan.
          </p>
          <p className="text-[#5a1d17] text-lg leading-relaxed">
            Kami mengutamakan kualitas bahan, kebersihan, dan pelayanan profesional —
            menghadirkan pengalaman bersantap yang berkesan dan lezat di setiap sajian.
          </p>
        </div>

         {/* Image Section - Mobile di atas, Desktop di kanan */}
        <div className="order-1 md:order-2">
          <img
            src="/images/about.png" // Ganti path sesuai gambar kamu
            alt="Dapur Akartalas Catering"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}