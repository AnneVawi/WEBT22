<script>
    import Accordion from "../components/Accordion.svelte";
    import Card from "../components/Card.svelte";
    import { GroupSettings } from "../datalayer/Settings";
    import { onDestroy } from 'svelte'

    export let store;

    let data = [];
    const unsubscribe = store.subscribe(value => data = store.getData(value.groupSetting, value.sortSetting, value.data))
    onDestroy(unsubscribe)
</script>

<h1 class="mb-4">Übersicht der Brandgefahr</h1>
{#if $store.groupSetting === GroupSettings.TOWN}
   {#each data as detail}
        <Card town={detail.town} level={detail.level}/>
    {/each}
{:else}
     {#each data as item}
        <Accordion stateName={item.state}>
            {#each item.details as detail}
                <Card town={detail.town} level={detail.level}/>
            {/each}
        </Accordion>
    {/each}
{/if}