import { createStore } from 'vuex';
import ui from './ui';

const store = createStore({
    modules: {
        ui: ui.store
    }
});
export default store;