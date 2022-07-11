<script>
    export let town;
    export let level;
</script>

{#if level === 1}
<div class="card my-border-first mb-3">
    <div class="card-header my-text-first">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2  my-text-first">
        Es existiert eine sehr geringe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 2}
  <div class="card my-border-second mb-3">
    <div class="card-header my-text-second">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 my-text-second">
        Es existiert eine geringe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 3}
  <div class="card my-border-third mb-3">
    <div class="card-header my-text-third">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 my-text-third">
        Es existiert eine mittlere Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 4}
  <div class="card my-border-fourth mb-3">
    <div class="card-header my-text-fourth">{town}
     </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 my-text-fourth">
        Es existiert eine hohe Gefahr eines Waldbrandes.
      </h6>
    </div>
  </div>
  {:else if level === 5}
  <div class="card my-border-fifth mb-3">
    <div class="card-header my-text-fifth">{town}
      </div>
    <div class="card-body">
      <h6 class="card-subtitle mb-2 my-text-fifth">
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
        justify-content: space-between;
        background-color: #111111;
        border: 3px solid;
    }
    .my-border-first, .my-text-first{
        color: #d0dfd0;
        border-color: #d0dfd0;
    }
    .my-border-second, .my-text-second{
       color: rgb(120, 188, 120);
        border-color: rgb(120, 188, 120);
    }
    .my-border-third, .my-text-third{
        color: rgb(255, 213, 0);
        border-color: rgb(255, 213, 0);
    }
    .my-border-fourth, .my-text-fourth{
        color:rgb(253, 131, 0);
        border-color: rgb(253, 131, 0);
    }
    .my-border-fifth, .my-text-fifth{
        color: red;
        border-color: red;
    }
  </style>