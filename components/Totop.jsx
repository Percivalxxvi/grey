import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Totop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 h-12 w-12 flex items-center justify-center rounded-full shadow-lg bg-gray-900 text-white hover:bg-gray-700 hover:cursor-pointer active:bg-purple-700 transition-all duration-300 border ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={30} />
    </button>
  );
};

export default Totop;
