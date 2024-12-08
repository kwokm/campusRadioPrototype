import React from 'react';
import { Track } from '../types/audio';
import { TrackCard } from './TrackCard';

interface TrackListProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  playbackRate: number;
  pitch: number;
  onTrackSelect: (track: Track) => void;
  onPlayPause: () => void;
  onPlaybackRateChange: (rate: number) => void;
  onPitchChange: (pitch: number) => void;
}

export const TrackList: React.FC<TrackListProps> = ({
  tracks,
  currentTrack,
  isPlaying,
  playbackRate,
  pitch,
  onTrackSelect,
  onPlayPause,
  onPlaybackRateChange,
  onPitchChange,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          track={track}
          isPlaying={isPlaying}
          isSelected={currentTrack?.id === track.id}
          playbackRate={playbackRate}
          pitch={pitch}
          onSelect={onTrackSelect}
          onPlayPause={onPlayPause}
          onPlaybackRateChange={onPlaybackRateChange}
          onPitchChange={onPitchChange}
        />
      ))}
    </div>
  );
};