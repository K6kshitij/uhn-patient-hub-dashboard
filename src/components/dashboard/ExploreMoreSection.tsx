
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExploreCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  color: string;
  bgColor: string;
}

const exploreCards: ExploreCard[] = [
  {
    title: "Invite Friends & Family",
    description: "Invite a family member or close friend to have access to your medical record.",
    icon: <Users className="h-12 w-12" />,
    action: "Manage access",
    color: "text-amber-600",
    bgColor: "bg-amber-100/50"
  },
  {
    title: "Share Everywhere",
    description: "Give one-time access to your record to any clinic with internet access.",
    icon: <Globe className="h-12 w-12" />,
    action: "Share record",
    color: "text-blue-600",
    bgColor: "bg-blue-100/50"
  },
  {
    title: "Health Education",
    description: "Access educational materials about your conditions and treatments.",
    icon: <Lightbulb className="h-12 w-12" />,
    action: "View resources",
    color: "text-green-600",
    bgColor: "bg-green-100/50"
  }
];

export default function ExploreMoreSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      setActiveIndex(index);
    }
  };

  const nextCard = () => {
    const newIndex = (activeIndex + 1) % exploreCards.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = (activeIndex - 1 + exploreCards.length) % exploreCards.length;
    scrollToCard(newIndex);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-xl bg-blue-100/50 backdrop-blur-sm">
          <Lightbulb className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Explore More</h2>
      </div>

      <div className="relative">
        <div 
          ref={carouselRef} 
          className="flex overflow-hidden gap-4"
        >
          {exploreCards.map((card, index) => (
            <div 
              key={card.title}
              className={cn(
                "rounded-2xl border border-white/50 bg-white/80 backdrop-blur-md p-6 shadow-lg w-full shrink-0 transition-all duration-500 ease-in-out transform",
                index === activeIndex ? "block scale-100 opacity-100" : "hidden scale-95 opacity-0"
              )}
            >
              <div className="flex gap-5 items-start">
                <div className={cn("p-3 rounded-xl", card.bgColor, card.color)}>
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 mb-5">{card.description}</p>
                  <Button 
                    variant="primary" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    {card.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {exploreCards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-blue-600 w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevCard}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white/80 backdrop-blur-md rounded-full shadow-md p-2 text-gray-600 hover:text-gray-800 border border-white/50 hover:bg-white transition-all"
          aria-label="Previous card"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextCard}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white/80 backdrop-blur-md rounded-full shadow-md p-2 text-gray-600 hover:text-gray-800 border border-white/50 hover:bg-white transition-all"
          aria-label="Next card"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
