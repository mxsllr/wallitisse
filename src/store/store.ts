import { defineStore } from 'pinia'

interface SongLyrics{
    lyrics : string
  }

export const useLyricsStore = defineStore({
    id: 'lyricsStore',
  state: () => ({
    
   lyricsTable:[] as SongLyrics[], 
     

  }),
    actions: {
    addLyric(lyric : SongLyrics) {
      this.lyricsTable.push(lyric)
    },
    }
});

  
