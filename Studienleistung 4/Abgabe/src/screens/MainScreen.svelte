<script>
    import AusklappDings from "../components/AusklappDings.svelte";
    import Kachel from "../components/Kachel.svelte"; 
    import { GroupSettings } from "../datalayer/Settings";
    import { onDestroy } from 'svelte'

    export let store;

    let data = [];
    const unsubscribe = store.subscribe(value => data = store.getData(value.groupSetting, value.sortSetting, value.data))
    onDestroy(unsubscribe)
</script>

<h1>MainScreen</h1>
{#if $store.groupSetting === GroupSettings.TOWN}
   {#each data as detail}
        <Kachel town={detail.town} level={detail.level}/>
    {/each}
{:else}
     {#each data as item}
        <AusklappDings stateName={item.state}>
            {#each item.details as detail}
                <Kachel town={detail.town} level={detail.level}/>
            {/each}
        </AusklappDings>
    {/each}
{/if}