<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <Icon icon="tabler:home-filled" width="180px" height="120px"/>
        
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <Icon icon="mdi:book-favorite" width="180px" height="120px" />
       
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Icon } from '@iconify/vue';


</script>

<style scoped>

ion-tab-bar, ion-tab-button{
  background-color: #FFE8C5;
}
svg{
  color:#FF0000
}


</style>