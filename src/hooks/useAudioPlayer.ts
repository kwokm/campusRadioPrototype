import { useState, useRef, useEffect } from 'react';
import { Track, AudioPlayerState } from '../types/audio';

export const useAudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [state, setState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    playbackRate: 1,
    pitch: 0
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = state.playbackRate;
    }
  }, [state.playbackRate]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setState(prev => ({
        ...prev,
        currentTime: audioRef.current!.currentTime,
        duration: audioRef.current!.duration
      }));
    }
  };

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
    setState(prev => ({ ...prev, isPlaying: true }));
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    setState(prev => ({ ...prev, playbackRate: rate }));
  };

  const handlePitchChange = (pitch: number) => {
    setState(prev => ({ ...prev, pitch }));
  };

  return {
    audioRef,
    currentTrack,
    state,
    handlePlay,
    handlePause,
    handleTimeUpdate,
    handleTrackSelect,
    handleSeek,
    handlePlaybackRateChange,
    handlePitchChange
  };
};