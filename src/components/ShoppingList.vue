<template>
    <div>
        <h2>Shopping List</h2>
        <div class="shopping-list">
            <span v-for="(item, itemIndex) in items()" :key="itemIndex" class="item">
                {{ item.ingredient }} - {{ Fractions.getFractionValue(item.count) }} {{item.unit.short ? item.unit.short : item.unit.plural }}
            </span>
            <span v-if="items().length === 0">None, add a list.</span>
        </div>
    </div>
</template>

<script setup>
import ui from '../ui';
import testData from '../items/testData';
import Fractions from '../numbers/fractions';

const items = () => {
    console.log("SHOPPING LIST");
    const lists = testData.getLists();
    const ingredients = [];
    
    // Loop through each list in MasterList
    for (let list of lists) {
        
        // Find how many of each is selected
        const count = ui.getChosenList(list);
        console.log(`${list} : ${count}`);

        // Get the list object to get ingredients
        const listObj = testData.getListForName(list);
        console.log(listObj);
        
        // Loop through each ingredient in list
        for (let ingred of listObj) {

            // Get name of ingredient
            const ingredName = ingred.ingredient;
            console.log(ingredName);
            
            // Find existing ingredient
            const existingIngred = ingredients.find(item => item.ingredient === ingredName);
            const quantityCount = count * ingred.quantity;
            if (quantityCount > 0) {
                if (existingIngred) {
                    // Add to it
                    existingIngred.count = existingIngred.count + quantityCount;
                } else {
                    //If none, create new one
                    ingredients.push({
                        ingredient: ingredName,
                        count: quantityCount,
                        unit: ingred.unit
                    });
                }
            }
            
        }
    }
    
    // Return list
    return ingredients;

}
</script>

<style scoped>
.shopping-list {
    /* background-color: red; */
    /* width: 100%; */
    padding: 20px;
}

.item {
    display: block;
    margin-bottom: 8px;
}
</style>