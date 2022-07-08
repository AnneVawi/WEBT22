<script>
	import { Router, Link, Route } from "svelte-navigator";
import MainScreen from "./screens/MainScreen.svelte";
import SettingsScreen from "./screens/SettingsScreen.svelte";
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="settings">Settings</Link>
	</nav>
	<div>
		<Route path="/">
			<MainScreen/>
		</Route>
		<Route path="settings">
			<SettingsScreen/>
		</Route>
	</div>
</Router>