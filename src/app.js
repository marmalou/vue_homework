import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			items: [
				'Buy Shopping',
				 'Clean Bathroom',
         'Car\'s MOT'
			],
			newItem: ""
		},
		methods: {
			saveNewItem: function(e) {
				e.preventDefault();
				this.items.push(
					 this.newItem
				);
				this.newItem ="";
			},


		}
	});
});
