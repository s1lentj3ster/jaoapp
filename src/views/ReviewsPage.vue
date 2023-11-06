<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Reviews</ion-title>
        </ion-toolbar>      </ion-header>

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label position="floating">Leave a Review</ion-label>                        
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button>Create Review</ion-button>       
            </ion-col>
          </ion-row>
          
        </ion-grid>
     
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
    IonButton,
    IonGrid,
    IonRow,
    IonCol
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
      IonButton,
      IonGrid,
      IonRow,
      IonCol
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
  