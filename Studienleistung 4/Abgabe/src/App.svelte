<script>
    import {Router, Link, Route} from "svelte-navigator";
    import MainScreen from "./screens/MainScreen.svelte";
    import SettingsScreen from "./screens/SettingsScreen.svelte";
    import {store} from './datalayer/Store';
    import {onMount} from "svelte";

    onMount(async () => {
        await store.init()
    });
</script>

<Router>
    <nav class="navbar navbar-expand-lg bg-light border-bottom mb-4">
        <div class="container-fluid">
            <span class="navbar-brand">Brandgefahr</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Übersicht</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="settings" class="nav-link">Einstellungen</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div>
        <Route path="/">
            <MainScreen store={store}/>
        </Route>
        <Route path="settings">
            <SettingsScreen store={store}/>
        </Route>
    </div>
</Router>

<style>
	:global(.nav-link[aria-current="page"]) { color: black; }
</style>
