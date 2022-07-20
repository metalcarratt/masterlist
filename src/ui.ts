import { createStore } from 'vuex';
import Vue from 'vue';

interface StoreType {
    selectedItem : string,
    chosenLists : { [key:string]:number; }
}

const store = createStore<StoreType>({
    state: {
        selectedItem: 'pancakes',
        chosenLists: {
            'pancakes' : 0,
            'french toast' : 0
        }
    }
});

export default {
    store,
    getSelectedItem() {
      return store.state.selectedItem;
    },
    changeSelectedItem(item : string) {
        store.state.selectedItem = item;
    },
    getChosenList(listName : string) : number {
        return store.state.chosenLists[listName];
    },
    updateChosenList(listName : string, amount : number) {
        console.log(`update ${listName} with ${amount}`);
        store.state.chosenLists[listName] = amount;
    },
    getChosenLists() : { [key:string]:number } {
        return store.state.chosenLists;
    }
}