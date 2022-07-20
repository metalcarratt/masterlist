<template>
    <span class="ingredient">
        {{ getTitle() }}
    </span>
</template>

<script setup>
import { defineProps } from 'vue';
import Fractions from '../numbers/fractions';

const props = defineProps({
    item: {}
});

const getTitle = () => {
    const nameText = props.item.ingredient;
    const quantity = props.item.quantity;
    let quantityText = Fractions.getFractionValue(quantity);
    const unitText = props.item.unit.short ? props.item.unit.short : props.item.unit.plural;
    return `${quantityText} ${unitText} of ${nameText}`;
}

</script>

<style scoped>
.ingredient {
    display: block;
    margin-bottom: 8px;
}
</style>