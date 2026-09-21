import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const HeroSection = React.forwardRef(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    React.useEffect(() => {
      const timer = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-x-hidden bg-[#0f0f13] text-white p-4 py-12 rounded-3xl border border-white/10 my-6 shadow-2xl',
          className
        )}
        {...props}
      >
        {/* Background Gradient Overlays */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(77,68,181,0.4),rgba(0,0,0,0))] filter blur-2xl"></div>
          <div className="absolute bottom-0 right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,115,230,0.3),rgba(0,0,0,0))] filter blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-4xl font-display text-white">
              {title}
            </h2>
            <p className="max-w-2xl mx-auto text-[#9e9e9e] md:text-lg">
              {subtitle}
            </p>
          </div>

          {/* Main Showcase Section */}
          <div className="relative w-full h-[360px] md:h-[480px] flex items-center justify-center">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'absolute w-56 h-80 md:w-72 md:h-[420px] transition-all duration-500 ease-in-out cursor-pointer group',
                      'flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border-2',
                      isCenter ? 'border-[#4d44b5] shadow-[#4d44b5]/40' : 'border-white/10 hover:border-white/30'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 55}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${(pos) * -12}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#7c73e6]">Featured Project</span>
                      <h4 className="text-white font-bold text-base truncate">{image.alt}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-20 bg-[#14161f]/80 backdrop-blur-md border-white/20 hover:border-[#4d44b5] hover:bg-[#4d44b5] text-white transition-all shadow-lg"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-20 bg-[#14161f]/80 backdrop-blur-md border-white/20 hover:border-[#4d44b5] hover:bg-[#4d44b5] text-white transition-all shadow-lg"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 pt-4 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "w-8 bg-[#4d44b5] shadow-[0_0_10px_#4d44b5]" : "w-2.5 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
