export const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/556132514532" 
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full px-3 py-2 md:px-4 md:py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base font-medium animate-pulse hover:animate-none hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-lg md:text-xl">💬</span>
      <span className="hidden sm:inline">Fale Conosco</span>
    </a>
  );
};