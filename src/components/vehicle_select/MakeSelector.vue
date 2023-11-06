<template>
<ion-grid>
    <ion-row>
        <ion-col>
            <ion-item>
                <ion-select v-model="vehicles"  @ionChange="updateMake" label="Manufacture">
                    <ion-select-option v-for="make in makes" :key="make.brand" :value="make" >{{make.brand}}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-col>
    </ion-row>
</ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue'
import vehicles from '../../vehicles-json/vehicles.js'
export default({
    name: 'MakeSelector',
    components: {
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonSelect,
        IonSelectOption
    },
    mounted() {
        console.log("List of Vehicles", vehicles[0])
    },
    data() {
        return {
            makes: vehicles,
            carMake: null
        }
    },
    methods: {
        updateMake(make) {
            this.carMake = make.detail.value
            console.log("MAKE MAKE MAKE", this.carMake)
            this.$emit('make-selected', this.carMake)
        },
    },
    watch: {
       
    }
})
</script>

<style scoped>

</style>