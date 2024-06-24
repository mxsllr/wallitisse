import { defineStore } from 'pinia'
import { ref } from 'vue';

export interface SongLyrics{
    lyrics :string;
    
  }

export const useLyricsStore = defineStore({
    id: 'lyricsStore',
  state: () => ({
    
   lyricsTable:[] as SongLyrics[], 
     

  }),
    actions: {
    addLyric(lyrics : SongLyrics): void {
      this.lyricsTable.push(lyrics)
    },
    }
});

  
