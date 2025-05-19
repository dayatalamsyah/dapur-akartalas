"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { number: "085219292992", label: "Layanan 1" },
    { number: "081283982326", label: "Layanan 2" },
    { number: "081211119661", label: "Layanan 3" },
    { number: "081211119662", label: "Layanan 4" },
  ];

  const openLink = (number: string) => {
    const url = `https://wa.me/${number}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 text-[#5a1d17]">
      {isOpen && (
        <div className="max-w-sm w-[95%] mb-2 p-4 bg-white rounded-xl shadow-lg w-64 space-y-2 text-sm backdrop-blur-md border border-[#5a1d17]">
          <div className="font-semibold mb-1 text-[#5a1d17]">Layanan Informasi</div>
          {contacts.map((contact, index) => (
            <button
              key={index}
              onClick={() => openLink(contact.number)}
              className="flex items-center gap-2 w-full text-left hover:underline"
            >
              <FaPhone className="text-[#5a1d17]" />
              {contact.number}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#5a1d17] hover:bg-[#49160f] text-white p-3 rounded-full shadow-lg transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
}
