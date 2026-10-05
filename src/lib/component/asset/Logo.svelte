<script lang="ts">

    let { lite }: { lite?: boolean } = $props();

</script>

<div class={`logo-wrapper${lite ? ' -lite' : ''}`} data-cursor="💰" aria-hidden="true">
    <div class="logo"></div>
    <p class="words">نورالدين</p>
</div>