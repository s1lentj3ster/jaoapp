<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>        
  
          <ion-tab-button tab="menu" href="/menu">
            <ion-icon :icon="book" />
            <ion-label>Menu</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="schedule" href="/schedule">
            <ion-icon :icon="calendar" />
            <ion-label>Schedule</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="reviews" href="/reviews">
            <ion-icon :icon="chatbox" />
            <ion-label>Reviews</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script>
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { playCircle, radio, library, search,calendar,home,chatbox,menu, book } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          playCircle,
          radio,
          library,          
          calendar,
          home,
          chatbox,
          menu,
          book
        };
      },
    };
  </script>