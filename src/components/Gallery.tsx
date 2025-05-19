export default function Gallery() {
  return (
    <section  id="galeri"
   className="pt-45 min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#5a1d17] text-2xl font-bold mb-4">Galeri Kami</h2>
        <p className="text-[#5a1d17] mb-8">
          Beberapa momen spesial dan sajian dari Dapur Akartalas.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Ganti URL dengan gambar kamu sendiri */}
          <img src="/images/gallery1.jpg" alt="Menu 1" className="rounded-lg shadow-md" />
          <img src="/images/gallery2.jpg" alt="Menu 2" className="rounded-lg shadow-md" />
          <img src="/images/gallery3.jpg" alt="Menu 3" className="rounded-lg shadow-md" />
          <img src="/images/gallery4.jpg" alt="Menu 4" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}
