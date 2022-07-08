<script>
	import { Router, Link, Route } from "svelte-navigator";
	import MainScreen from "./screens/MainScreen.svelte";
	import SettingsScreen from "./screens/SettingsScreen.svelte";
	import {store} from './datalayer/Store';
	import { onMount } from "svelte";

	onMount(async () => {
		await store.init()
	});
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="settings">Settings</Link>
	</nav>
	<div>
		<Route path="/">
			<MainScreen store={store}/>
		</Route>
		<Route path="settings">
			<SettingsScreen/>
		</Route>
	</div>
</Router>