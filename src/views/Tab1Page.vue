<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="ion-no-border">
       
    <ion-toolbar>
      <div class="logocontainer">
        <img src="/assets/logo.svg" alt="logo"/>
      </div>
     
    </ion-toolbar>
    <form class="searchtool"  @submit.prevent="getSuggestionSearch">
      <button type="submit">
           OK
        </button>

      
        <input type="search" name="artist" id="artist" v-model="artist" placeholder="Enter Artist name"/>
        <input type="text" name="song" id="song" v-model="song" placeholder="Search Songs by title"/>
        
      </form>
      <div class="containerlyrics" v-if="lyricsTable">
        <p v-for="(item, index) in lyricsTable" :key="index">{{item}}</p>

      </div>
    
  </ion-header>
      
   
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/vue';
import { ref, reactive, provide } from 'vue';
import {useLyricsStore} from '../store/store'

const lyricsStore = useLyricsStore
const lyricsTable = ref(lyricsStore.lyricsTable);




const song = ref("")
const artist = ref("")

const getSuggestionSearch = async () => {

const response = await fetch(`https://api.lyrics.ovh/v1/${artist.value}/${song.value}`, {
  headers : {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
  }
})
const lyrics = await response.json()

lyricsStore.addLyric(lyrics)


};

getSuggestionSearch().catch((error) => console.error);




 




</script>

<style scoped>
.ion-no-border{
  display: flex;
  flex-flow: row-reverse;

}
.searchtool{
  margin-left:7%;
  padding-top: 44px;

}
.logocontainer{
  padding-top: 20px;
  
}
input{
  font-size: larger;
  background-color:var(--ion-wheat);
  border-radius: 17px;
}
.lyrics-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button{
  background-color:var(--ion-wheat);
  border-radius: 15px;
  margin-right: 6rem;
}
</style>