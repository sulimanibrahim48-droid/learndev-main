import { ReactNode } from "react";
import VideoCard from "./VideoCard";
import { Tutorial } from "@/data/tutorials";

interface TutorialPageProps {
  title: string;
  description: string;
  icon: ReactNode;
  tutorials: Tutorial[];
  accentColor?: string;
}

const TutorialPage = ({ title, description, icon, tutorials }: TutorialPageProps) => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold text-gradient">{title}</h1>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <div
              key={tutorial.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <VideoCard
                title={tutorial.title}
                thumbnail={tutorial.thumbnail}
                duration={tutorial.duration}
                views={tutorial.views}
                channel={tutorial.channel}
                youtubeUrl={tutorial.youtubeUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
