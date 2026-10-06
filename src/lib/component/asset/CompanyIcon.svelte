<script lang="ts">
    
    import { onMount } from "svelte";
    import { getRoleByID } from "$lib/script/helpers";
    import { followInit } from "$lib/script/effect";

    import Image from "$lib/component/asset/Image.svelte";

    let { id }: { id: string; } = $props();
    const role = $derived(getRoleByID(id));
    const src = $derived(`logo/${id}.svg`);
    const alt = $derived(role && role.company ? role.company : id);
    const parent = $derived({ "class":"company-icon", "data-cursor":"", "data-cursor-attach":`#${id}Name`, "data-follow-hover":"", "data-follow-reach":"50", "data-follow-nudge":"10", "data-follow-lerp":".3" });
    const imgProps = $derived({ "class":"-follow", "role":"presentation" });

    onMount(followInit);

</script>

<Image src={src} alt={alt} props={imgProps} parent={parent} />