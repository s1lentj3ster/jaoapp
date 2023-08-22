<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Reviews</ion-title>
        </ion-toolbar>      </ion-header>
     
    </ion-page>
  </template>
  
  <script>
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonDatetime,
    IonInput,
    IonTextarea,
    IonButton
  } from '@ionic/vue';
  
  export default {
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonItem,
      IonLabel,
      IonDatetime,
      IonInput,
      IonTextarea,
      IonButton
    },
    data() {
      return {
        date: '',
        time: '',
        serviceType: '',
        additionalDetails: ''
      };
    },
    methods: {
      submitForm() {

        axios.post('/api/appointments', {
          date: this.date,
          time: this.time,
          serviceType: this.serviceType,
          additionalDetails: this.additionalDetails
        })
        .then(response => {
          // Redirect to confirmation page
          this.$router.push({ name: 'confirmation' });
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
      }
    }
  };
  </script>
  