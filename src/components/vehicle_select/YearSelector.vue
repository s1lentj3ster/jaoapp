<template>
<ion-grid>
    <ion-row>
        <ion-col>
            <ion-item>
                <ion-label>Year</ion-label>
                <ion-select v-model="year" @ionChange="updateYear(year)">
                    <ion-select-option v-for="year in years" :key="year" :value="year">{{year}}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-col>
    </ion-row>
</ion-grid>
</template>

<script>

import { IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue'

export default({
    name: 'YearSelector',
    components: {
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonSelect,
        IonSelectOption
    },
   
    data() {
        return {
            years: [],
            year: null
        }
    },
    methods: {
        updateYear(year) {
            this.year = year
            this.$emit('year-selected', this.year)
        },
        generateYearList(){
            let currYear = new Date().getFullYear()
            
            for(let i = currYear; i >= 1900; i--){
                this.years.push(i)
            }
        }
    },
   
    mounted() {
       this.generateYearList()
    }   
    
})
</script>

<style scoped>

</style>