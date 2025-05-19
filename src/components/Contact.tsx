import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaLink,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section 
    id="kontak"
    className="text-[#5a1d17] pt-45 min-h-screen bg-cover bg-right-top bg-no-repeat py-12 px-4 md:px-8"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Kolom 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Dapur Akartalas Catering</h3>
            <p>Food & Beverage</p>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Jl. Swadaya II no 21 C, Tanjung Barat, Jakarta Selatan, Jakarta,
                Indonesia
              </p>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Kontak Telepon</h3>
            {["085219292992", "081283982326", "081211119661", "081211119662"].map(
              (phone, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaPhone />
                  <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                </div>
              )
            )}
          </div>

          {/* Kolom 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Informasi Lain</h3>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:info.akartalas@gmail.com" className="hover:underline">
                info.akartalas@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram />
              <a
                href="https://www.instagram.com/dapur.akartalas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @dapur.akartalas
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebookF />
              <a
                href="https://www.facebook.com/sigit.git.5623293"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Dapur Akartalas
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLink />
              <a
                href="https://lynk.id/dapurakartalas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                lynk.id/dapurakartalas
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLink />
              <a
                href="https://www.weddingku.com/wedding-vendors/catering/dapur-akartalas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                weddingku.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
