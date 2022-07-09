<script>
    import {GroupSettings, SortSettings} from "../datalayer/Settings";
    export let store;
</script>

<h1 class="mb-4">Einstellungen</h1>

<h2 class="mb-4">Ansicht</h2>
<div class="btn-group mb-5" role="group">
    <button type="button" class="btn btn-outline-primary {$store.groupSetting === GroupSettings.STATE ? 'active' : ''}"
            on:click={store.enableGrouping()}>Bundesländern
    </button>
    <button type="button" class="btn btn-outline-primary {$store.groupSetting === GroupSettings.TOWN ? 'active' : ''}"
            on:click={store.disableGrouping()}>Städte
    </button>
</div>

<h2 class="mb-4">Sortierung</h2>
<div class="btn-group mb-5" role="group">
    <button type="button" class="btn btn-outline-primary {$store.sortSetting === SortSettings.NAME ? 'active' : ''}"
            on:click={store.sortByName()}>Name
    </button>
    <button type="button" class="btn btn-outline-primary {$store.sortSetting === SortSettings.INDEX ? 'active' : ''}"
            on:click={store.sortByIndex()}>Index
    </button>
</div>

