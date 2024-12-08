export interface Track {
  id: number;
  title: string;
  url: string;
  artist: string;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  pitch: number;
}