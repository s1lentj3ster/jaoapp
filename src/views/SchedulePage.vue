<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Schedule Service</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <form @submit.prevent="submitForm">
          <ion-item>
            <ion-label>Date</ion-label>
            <ion-datetime v-model="date" display-format="MMM DD, YYYY" picker-format="YYYY-MM-DD"></ion-datetime>
          </ion-item>
          
          <ion-item>
            <ion-label>Service Type</ion-label>
            <ion-input v-model="serviceType" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Additional Details</ion-label>
            <ion-textarea v-model="additionalDetails"></ion-textarea>
          </ion-item>
          <ion-button type="submit" expand="full">Schedule</ion-button>
        </form>
      </ion-content>
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
  