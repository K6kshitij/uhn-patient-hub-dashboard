
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExploreCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
}

const exploreCards: ExploreCard[] = [
  {
    title: "Invite Friends & Family",
    description: "Invite a family member or close friend to have access to your medical record.",
    icon: <Users className="h-10 w-10 text-amber-500" />,
    action: "Manage access"
  },
  {
    title: "Share Everywhere",
    description: "Give one-time access to your record to any clinic with internet access.",
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    action: "Share record"
  },
  {
    title: "Health Education",
    description: "Access educational materials about your conditions and treatments.",
    icon: <Lightbulb className="h-10 w-10 text-green-500" />,
    action: "View resources"
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
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-medium">Explore More</h2>
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
                "uhn-card w-full shrink-0 transition-all duration-300 ease-in-out",
                index === activeIndex ? "block" : "hidden"
              )}
            >
              <div className="flex gap-4 items-center"> {/* Changed from items-start to items-center */}
                <div className="flex-shrink-0"> {/* Added flex-shrink-0 to prevent icon from growing */}
                  {React.cloneElement(card.icon, { 
                    className: "h-8 w-8" // Reduced icon size from h-10 w-10 to h-8 w-8
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{card.title}</h3>
                  <p className="text-sm text-uhn-text-secondary mb-4">{card.description}</p>
                  <Button 
                    variant="primary" 
                    className="px-5 py-2.5 text-base font-semibold rounded-md"
                  >
                    {card.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {exploreCards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-blue-600" : "bg-uhn-border"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevCard}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full shadow-md p-1 text-uhn-text-secondary hover:text-uhn-text border border-uhn-border"
          aria-label="Previous card"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={nextCard}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full shadow-md p-1 text-uhn-text-secondary hover:text-uhn-text border border-uhn-border"
          aria-label="Next card"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
