import { writable } from 'svelte/store';
import API from './API';
import { GroupSettings, SortSettings } from './Settings';

function createStore() {
	const { subscribe, set, update } = writable({
		groupSetting: GroupSettings.TOWN,
		sortSetting: SortSettings.NAME,
		data: []
	});

	const init = async () => {
		const apiData = await API.getData();

		const parsedData = Object.keys(apiData.states).map((state) => {
			return {
				state,
				details: apiData.states[state].map((townDetails) => {
					const town = Object.keys(townDetails)[0];
					return {
						town,
						level: townDetails[town]
					};
				})
			};
		});

		update((store) => {
			store.data = parsedData;
			return store;
		});
	};

	const getData = (groupSetting, sortSetting, data) => {
		if (groupSetting === GroupSettings.STATE) {
			if (sortSetting === SortSettings.INDEX) {
				return data.map((state) => {
					state.details = state.details.sort((a, b) => b.level - a.level);
					return state;
				});
			} else {
				return data.map((state) => {
					state.details = state.details.sort((a, b) => a.town.localeCompare(b.town));
					return state;
				});
			}
		} else {
			const towns = [];
			data.forEach((state) => {
				state.details.forEach((detail) => towns.push(detail));
			});
			if (sortSetting === SortSettings.INDEX) {
				return towns.sort((a, b) => b.level - a.level);
			} else {
				return towns.sort((a, b) => a.town.localeCompare(b.town));
			}
		}
	};

	const sortByIndex = () => {
		update((store) => {
			store.sortSetting = SortSettings.INDEX;
			return store;
		});
	};

	const sortByName = () => {
		update((store) => {
			store.sortSetting = SortSettings.NAME;
			return store;
		});
	};

	const enableGrouping = () => {
		update((store) => {
			store.groupSetting = GroupSettings.STATE;
			return store;
		});
	};

	const disableGrouping = () => {
		update((store) => {
			store.groupSetting = GroupSettings.TOWN;
			return store;
		});
	};

	return {
		subscribe,
		init,
		getData,
		sortByIndex,
		sortByName,
		enableGrouping,
		disableGrouping
	};
}

export const store = createStore();
