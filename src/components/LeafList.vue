<template>
    <div>
        <h2>{{ ui.getSelectedItem() }}</h2>
        <div class="leaf-list">
            <LeafListItem v-for="(item, itemIndex) in list()" :key="itemIndex" :item="item" />
        </div>
    </div>
</template>

<script setup>
import LeafListItem from './LeafListItem.vue';
import testData from '../items/testData';
import ui from '../ui';

const list = () => {
    return testData.getListForName(ui.getSelectedItem());
} 
</script>

<style scoped>
.leaf-list {
    padding: 20px;
}


</style>