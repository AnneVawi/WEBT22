<script>
    export let stateName;
</script>

<div class="accordion open" id="accordion{stateName}">
    <div class="accordion-item">
        <h2 class="accordion-header" id="heading{stateName}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{stateName}" aria-expanded="true" aria-controls="collapse{stateName}">
                {stateName}
            </button>
        </h2>
        <div id="collapse{stateName}" class="accordion-collapse collapse show" aria-labelledby="heading{stateName}" data-bs-parent="#accordion{stateName}">
            <div class="accordion-body">
                <slot></slot>
            </div>
        </div>
    </div>
</div>