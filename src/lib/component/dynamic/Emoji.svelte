<script>
    let { emoji, text } = $props();
</script>

<span class="emoji" data-emoji={emoji}>
    {#if text}<span class="-text">{text}</span>{/if}
</span>