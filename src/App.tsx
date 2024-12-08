import React from 'react';
import { TrackList } from './components/TrackList';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { tracks } from './data/tracks';

function App() {
  const {
    audioRef,
    currentTrack,
    state,
    handlePlay,
    handlePause,
    handleTimeUpdate,
    handleTrackSelect,
    handlePlaybackRateChange,
    handlePitchChange
  } = useAudioPlayer();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Audio Player</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {currentTrack && (
            <audio
              ref={audioRef}
              src={currentTrack.url}
              onTimeUpdate={handleTimeUpdate}
            />
          )}

          <TrackList
            tracks={tracks}
            currentTrack={currentTrack}
            isPlaying={state.isPlaying}
            playbackRate={state.playbackRate}
            pitch={state.pitch}
            onTrackSelect={handleTrackSelect}
            onPlayPause={state.isPlaying ? handlePause : handlePlay}
            onPlaybackRateChange={handlePlaybackRateChange}
            onPitchChange={handlePitchChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;