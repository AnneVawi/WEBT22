<script>
    export let stateName;
    const token = btoa(stateName).replace(/[^\d\w\.]+/g,'');
</script>

<div class="accordion open" id="accordion{token}">
    <div class="accordion-item">
        <h2 class="accordion-header" id="heading{token}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{token}" aria-expanded="true" aria-controls="collapse{token}">
                {stateName}
            </button>
        </h2>
        <div id="collapse{token}" class="accordion-collapse collapse show" aria-labelledby="heading{token}" data-bs-parent="#accordion{token}">
            <div class="accordion-body">
                <slot></slot>
            </div>
        </div>
    </div>
</div>