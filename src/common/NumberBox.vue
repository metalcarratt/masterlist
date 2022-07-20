<template>
    <span>
        <span :class="['number-box', props.count > 0 ? 'not-empty' : '']" @click="clickBox">
            <span class="content">{{ props.count }}</span>
        </span>
        <span :class="['number-box-minus', props.count == 0 ? 'hidden' : '']" @click="clickMinus">-</span>
    </span>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({
    count: Number
});
const emit = defineEmits(['update']);
// const count = ref(0);

const clickBox = () => {
    emit('update', props.count + 1);
    // count.value = count.value + 1;
}

const clickMinus = () => {
    emit('update', props.count - 1);
    // count.value = count.value - 1;
}
</script>

<style scoped>
.number-box {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #ccc;
    text-align: center;
    padding-top: 2px;
    border: 2px solid #ccc;
}

.number-box.not-empty {
    background-color: #2196F3;
    border-color: #2196F3;
}

.number-box .content {
    font-family: monospace;
    font-size: 18px;
}

.number-box:hover {
    cursor: pointer;
    border-color: white;
}

.number-box-minus {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #e26161;
    font-family: monospace;
    font-size: 18px;
    border: 2px solid #e26161;
    text-align: center;
    padding-top: 2px;
}

.number-box-minus.hidden {
    visibility: hidden;
}

.number-box-minus:hover {
    cursor: pointer;
    border-color: white;
}
</style>