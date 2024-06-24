<template>
  <ion-page>
  
    <ion-content :fullscreen="true">
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <div class="logocontainer">
           <img src="/assets/logo.svg" alt="logo"/>
          </div>
        </ion-toolbar>
        <form class="searchtool" >
      <button>
           OK
        </button>
        <input type="text" id="song" placeholder="Search Songs by Title"/>
        
      </form>

     
      </ion-header>

      <ExploreContainer name="Search Lyrics in Favorites Songs" />
      <div class="containerlyrics" v-if="lyricsTable">
        <p v-for="(lyric, index) in lyricsTable" :key="index">{{lyric.content}}</p>

      </div>
      <div class="containerlyrics" v-else>
        <p>No lyrics found</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { ref } from 'vue';

import {useLyricsStore} from '../store/store'

const lyricsStore = useLyricsStore
const lyricsTable = ref(lyricsStore.lyricsTable);


</script>
<style scoped>
.logocontainer{
  padding-top: 20px;

}

.ion-no-border{
  display: flex;
  flex-flow: row-reverse;

}
.searchtool{
  margin-left:7%;
  padding-top: 44px;

}
input{
  font-size: larger;
  background-color:var(--ion-wheat);
  border-radius: 17px;
}
button{
  background-color:var(--ion-wheat);
  border-radius: 15px;
  margin-right: 6rem;
}
</style>