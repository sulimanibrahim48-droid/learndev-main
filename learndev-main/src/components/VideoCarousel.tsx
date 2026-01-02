import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface CarouselVideo {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  youtubeUrl: string;
}

interface VideoCarouselProps {
  videos: CarouselVideo[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
      {/* Slides */}
      {videos.map((video, index) => (
        <a
          key={video.id}
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentIndex
              ? "opacity-100 translate-x-0"
              : index < currentIndex
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                {video.category}
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                {video.title}
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Watch Now
                </div>
              </div>
            </div>

            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center transform hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </a>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.preventDefault();
          goToPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/80 transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/80 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
