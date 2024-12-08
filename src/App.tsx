import React, { useEffect } from 'react';
import { tracks } from './data/tracks';
import { TrackCard } from './components/TrackCard';
import { useAudioPlayer } from './hooks/useAudioPlayer';

function App() {
  const {
    audioRefs,
    initializeTrack,
    handlePlay,
    handlePause,
    handleVolumeChange,
    handlePlaybackRateChange,
    handlePitchChange,
    getTrackState
  } = useAudioPlayer();

  useEffect(() => {
    tracks.forEach(track => initializeTrack(track.id));
  }, []);

  return (
    <div className="py-8 min-h-screen bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-center">Ambient Mixer</h1>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              trackState={getTrackState(track.id)}
              audioRef={(element) => {
                if (element) {
                  audioRefs.current.set(track.id, element);
                }
              }}
              onPlay={() => handlePlay(track.id)}
              onPause={() => handlePause(track.id)}
              onVolumeChange={(volume) => handleVolumeChange(track.id, volume)}
              onPlaybackRateChange={(rate) => handlePlaybackRateChange(track.id, rate)}
              onPitchChange={(pitch) => handlePitchChange(track.id, pitch)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;