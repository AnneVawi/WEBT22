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

function drawPieChart(data) {
	const svg = d3.select('svg');
	const width = svg.attr('width');
	const height = svg.attr('height');
	const radius = 200;

	const ordinalScale = d3.scaleOrdinal().domain(data).range(['#4FE07C', '#E0C031', '#E0771B', '#E00804', '#1012E0', '#2FE0D6']);

	const tooltip = d3.select('.container').append('div').attr('class', 'tooltip');
	tooltip.append('p').attr('class', 'label');

	const pieChart = svg
		.append('g')
		.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
		.selectAll('arc')
		.data(
			d3.pie().value((d) => {
				return d.amount;
			})(data)
		)
		.enter();

	pieChart
		.append('path')
		.attr('d', d3.arc().outerRadius(radius).innerRadius(0))
		.attr('fill', (d) => {
			return ordinalScale(d.data.acronym);
		})
		.on('mouseover', (_, data) => {
			tooltip.select('.label').html(data.data.title);
			tooltip.style('display', 'block');
		})
		.on('mouseout', () => {
			tooltip.style('display', 'none');
		});

	pieChart
		.append('text')
		.attr('transform', (d) => {
			return 'translate(' + d3.arc().outerRadius(radius).innerRadius(0).centroid(d) + ')';
		})
		.text((d) => {
			return d.data.acronym;
		})
		.style('font-family', 'arial')
		.style('font-size', 15);
}

loadDataFromServer().then(drawPieChart);
