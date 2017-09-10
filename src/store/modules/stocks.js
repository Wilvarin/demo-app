
const state = {
	items: [],
    rnd_item: []
};

const mutations = {
	'SET_ITEMS' (state, items) {
		state.items = items;
	},
	'RND_ITEM' (state) {
        let randIndex = Math.floor(Math.random() * state.items.length);
        state.rnd_item = state.items[randIndex];
	},
    'ADD_ITEM' (state, item) {
	    state.items.push(item);
    }
};

const actions = {
	randomizeItem: ({commit}) => {
		commit('RND_ITEM');
	},
    addItem: ({commit}, item) => {
        commit('ADD_ITEM', item);
    }
};

const getters = {
	items: state => {
		return state.items;
	},
    rndItem: state => {
        return state.rnd_item;
    }
};

export default {
	state,
	mutations,
	actions,
	getters
}