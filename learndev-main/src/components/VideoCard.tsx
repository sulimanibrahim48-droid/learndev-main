import { Play, Clock, Eye } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  channel: string;
  youtubeUrl: string;
}

const VideoCard = ({ title, thumbnail, duration, views, channel, youtubeUrl }: VideoCardProps) => {
  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card card-hover glow-border block group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="play-button">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-background/90 text-xs font-medium flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{channel}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {views}
          </span>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
