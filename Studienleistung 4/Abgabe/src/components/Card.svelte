<script>
    export let town;
    export let level;
</script>

{#if level === 1}
<div class="card my-border-first mb-3">
    <div class="card-header my-text-first">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">
        Es existiert eine sehr geringe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 2}
  <div class="card my-border-second mb-3">
    <div class="card-header my-text-second">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">
        Es existiert eine geringe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 3}
  <div class="card my-border-third mb-3">
    <div class="card-header my-text-third">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">
        Es existiert eine mittlere Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 4}
  <div class="card my-border-forth mb-3">
    <div class="card-header my-text-forth">{town}
     </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">
        Es existiert eine hohe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 5}
  <div class="card my-border-fifth mb-3">
    <div class="card-header my-text-fifth">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">
        Es existiert eine sehr hohe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else} 
    <h2>Ungültiger Wert!</h2>
{/if}

  <style>
      .card{
        width: 18rem;
        margin-bottom: 20px;
        margin-left: 20px;
        display: inline-block;
        flex-wrap: wrap;
        justify-content: space-between;}
    
    .my-border-first, .my-text-first{
        color: rgb(120, 188, 120);
        border-color: rgb(120, 188, 120);
    }
    .my-border-second, .my-text-second{
        color: rgb(2, 127, 2);
        border-color: rgb(2, 127, 2);
    }

    .my-border-third, .my-text-third{
        color: rgb(255, 213, 0);
        border-color: rgb(255, 213, 0);
    }
    .my-border-forth, .my-text-forth{
        color:rgb(253, 131, 0);
        border-color: rgb(253, 131, 0);
    }
    .my-border-fifth, .my-text-fifth{
        color: red;
        border-color: red;
    }
  </style>