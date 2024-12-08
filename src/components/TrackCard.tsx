import React from 'react';
import { Music, Play, Pause, Settings2 } from 'lucide-react';
import { Track } from '../types/audio';

interface TrackCardProps {
  track: Track;
  isPlaying: boolean;
  isSelected: boolean;
  playbackRate: number;
  pitch: number;
  onSelect: (track: Track) => void;
  onPlayPause: () => void;
  onPlaybackRateChange: (rate: number) => void;
  onPitchChange: (pitch: number) => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  isPlaying,
  isSelected,
  playbackRate,
  pitch,
  onSelect,
  onPlayPause,
  onPlaybackRateChange,
  onPitchChange,
}) => {
  const [showControls, setShowControls] = React.useState(false);

  return (
    <div
      className={`p-4 rounded-lg ${
        isSelected ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white'
      } transition-colors shadow-sm space-y-4`}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <Music className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-gray-900">{track.title}</h3>
          <p className="text-sm text-gray-500">{track.artist}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => {
              onSelect(track);
              onPlayPause();
            }}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            {isSelected && isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setShowControls(!showControls)}
            className={`p-2 rounded-full ${
              showControls ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
            } hover:bg-blue-600 hover:text-white transition-colors`}
          >
            <Settings2 className="w-5 h-5" />
          </button>
        </div>

        {showControls && (
          <div className="space-y-2">
            <div>
              <label className="block text-xs font-medium text-gray-600">
                Speed: {playbackRate.toFixed(1)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={playbackRate}
                onChange={(e) => onPlaybackRateChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600">
                Pitch: {pitch}
              </label>
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                value={pitch}
                onChange={(e) => onPitchChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};