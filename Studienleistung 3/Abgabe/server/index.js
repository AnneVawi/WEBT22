const express = require('express');
const cors = require('cors');

const data = require('./data.json');

const app = express();
const port = 3000;

app.use(cors());

app.get('/modules', (req, res) => {
	res.json(data.modules);
});

app.get('/module_groups', (req, res) => {
	res.json(data.moduleGroups);
});

app.listen(port, () => {
	console.log(`Studiengangsdaten Backend listening on port ${port}`);
});
