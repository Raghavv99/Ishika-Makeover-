import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const whatsappNumber = "917275505871"; // Phone number without + or spacing
  const message = encodeURIComponent("Hello! I want to book an appointment.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-black/50 hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-black px-3 py-1.5 rounded shadow-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Book on WhatsApp
      </span>
    </a>
  );
}
