class PieChart {
	loadDataFromServer = async () => {
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
	};

	drawPieChart = (data) => {
		const svg = d3.select('#pie-chart');
		const width = 400;
		const height = 400;
		const radius = 200;
		const ordinalScale = d3.scaleOrdinal().domain(data).range(['#4FE07C', '#E0C031', '#E0771B', '#E00804', '#1012E0', '#2FE0D6']);

		const tooltip = svg.append('div').attr('class', 'd3-tooltip');
		tooltip.append('p').attr('class', 'label');

		const pieChart = svg
			.append('svg')
			.attr('viewBox', `0 0 ${width} ${height}`)
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
			.on('mousemove', (e, data) => {
				//hier wurde absichtlich die Anzahl der Module mit angezeigt, da uns die Darstellung so hilfreicher vorkam
				tooltip.select('.label').html(data.data.title + '<br>' + data.data.amount + ' Modul(e)');
				tooltip
					.style('display', 'block')
					.style('left', e.pageX + 'px')
					.style('top', e.pageY + 'px');
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
	};
}

class Nav {
	links = document.getElementsByClassName('nav-link');
	pieChart = new PieChart();

	init = () => {
		this.loadTemplate(this.links[0]);
		for (let link of this.links) {
			link.addEventListener('click', () => {
				this.loadTemplate(link);
			});
		}
	};

	loadTemplate = (link) => {
		const content = document.getElementById('content');
		content.innerHTML = document.getElementById(link.id + '-template').innerHTML;

		if (link.id === 'pie-link') {
			this.pieChart.loadDataFromServer().then(this.pieChart.drawPieChart);
		}
		this.resetActive();
		link.classList.add('active');
	};

	resetActive = () => {
		for (let link of this.links) {
			link.classList.remove('active');
		}
	};
}

new Nav().init();
