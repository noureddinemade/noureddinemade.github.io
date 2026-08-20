<script lang="ts">

    let { tag, bg }: {tag: string, bg?: string} = $props();

</script>

<li class={`tag colour -bg -bg-${bg ? bg : 'light-light'} text -contrast`}>{tag}</li>