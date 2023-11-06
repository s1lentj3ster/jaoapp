<template>
<ion-grid>
    <ion-row>
        <ion-col>
            <ion-item>
                <ion-select v-model="models.models" @ionChange="updateModel" label="Model">
                    <ion-select-option v-for="(model,index) in models.models" :key="index" :value="models.models[index]">{{models.models[index]}}</ion-select-option>
                </ion-select>
            </ion-item>
        </ion-col>
    </ion-row>
</ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue'

export default({
    name: 'ModelSelector',
    props:['make'],
    components: {
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonSelect,
        IonSelectOption
    },
    data(){
        return {
            models: this.make,
            selectedModel: null
        }
    },
    methods: {
        updateModel(model) {
            this.selectedModel = model.detail.value
            console.log("MODEL MODEL MODEL", this.selectedModel)
          this.$emit('model-selected', this.selectedModel)
        },
    },
    mounted() {
        console.log("List of Models", this.make.models)
    },
})
</script>


<style scoped>

</style>