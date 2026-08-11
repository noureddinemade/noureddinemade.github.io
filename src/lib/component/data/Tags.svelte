<script lang="ts">
    let { tags } = $props();
</script>

<ul class="tags">
    {#each tags as t} <li>{t}</li> {/each}
</ul>