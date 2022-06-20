async function loadDataFromServer() {
	const moduleGroupsResponse = await fetch('http://localhost:3000/module_groups', { mode: 'cors' });
	const moduleGroups = await moduleGroupsResponse.json();

	const modulesResponse = await fetch('http://localhost:3000/modules', { mode: 'cors' });
	const modules = await modulesResponse.json();

	const moduleMap = new Map();

	moduleGroups.forEach((group) => {
		moduleMap.set(group.acronym, {
			acronym: group.acronym,
			title: `Modulgruppe ${group.acronym}: ${group.title}`,
			amount: 0
		});
	});

	modules.forEach((module) => {
		const item = moduleMap.get(module.moduleGroup);
		if (item == null) return;
		item.amount += 1;
		moduleMap.set(item.acronym, item);
	});

	return Array.from(moduleMap.values());
}

loadDataFromServer().then(console.log);
