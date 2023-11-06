<template>
    <div>
        <YearSelector @year-selected="updateYear" />
        <MakeSelector :year="selectedYear" @make-selected="updateMake" />
        <ModelSelector v-if="selectedMake" :year="selectedYear" :make="selectedMake" @model-selected="updateModel" />
        <div v-if="selectedYear && selectedMake && selectedModel">
            You have selected a {{ selectedYear }} {{ selectedMake.brand }} {{ selectedModel }}.
        </div>
    </div>
</template>

<script>
import YearSelector from './YearSelector.vue';
import MakeSelector from './MakeSelector.vue';
import ModelSelector from './ModelSelector.vue';

export default {
    components: {
        YearSelector,
        MakeSelector,
        ModelSelector,
    },
    data() {
        return {
            selectedYear: null,
            selectedMake: null,
            selectedModel: null,
        };
    },
    methods: {
        updateYear(year) {
            this.selectedYear = year;
        },
        updateMake(make) {
            console.log("UpdateMake", make)
            this.selectedMake = make;
        },
        updateModel(model) {
            this.selectedModel = model;
        },
    },
};
</script>
