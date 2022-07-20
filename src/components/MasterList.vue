<template>
    <div class="master-list">
        <h2>Lists</h2>
        <span
            :class="['list', ui.getSelectedItem() == listName ? 'selected' : '']"
            v-for="(listName, listIndex) in testData.getLists()"
            :key="listIndex"
        >
            <label @click="clickItem(listName)">
                {{ listName }}
            </label>
            <NumberBox :count="ui.getChosenList(listName)" @update="ui.updateChosenList(listName, $event)"/>
        </span>
    </div>
</template>

<script setup >
import NumberBox from '../common/NumberBox.vue';
import testData from '../items/testData';
import ui from '../ui';

const clickItem = (item) => {
    ui.changeSelectedItem(item);
}
</script>

<style scoped>
.master-list {
    /* background-color: green; */
    /* padding: 10px; */
    border-bottom: 2px solid #ff6e26;
}

.list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid white;
}

.list.selected {
    border-color: #f3d323;
}

.list label {
    padding: 10px;
    display: inline-block;
}

.list label:hover {
    background-color: white;
    cursor: pointer;
}
</style>