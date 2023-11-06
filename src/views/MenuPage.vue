<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>      
      <vehicle-selector></vehicle-selector>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import VehicleSelector from '../components/vehicle_select/VehicleSelector.vue';

  export default {
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, VehicleSelector },
  };
</script>