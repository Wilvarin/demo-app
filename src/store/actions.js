import Vue from 'vue';

export const loadData = ({commit}) => {
	Vue.http.get('data.json')
		.then(response => response.json())
		.then(data => {
			if (data) {
				const items = data;

				commit('SET_ITEMS', items);
			}
		});
};

