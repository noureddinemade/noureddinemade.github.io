<script lang="ts">
    import type { EmojiProps } from "$lib/script/types";

    let { emoji, text, addOnClasses }: EmojiProps = $props();
    const classes = $derived(`emoji${ addOnClasses ? ' ' + addOnClasses : '' }`);
</script>

<span class={classes} data-emoji={emoji}>
    {#if text}<span class="-text">{text}</span>{/if}
</span>