<script lang="ts">
    import Image from "$lib/component/asset/Image.svelte";
    import { getRoleByID } from "$lib/script/helpers";

    let { id }      = $props();
    const role      = $derived(getRoleByID(id));
    const src       = $derived(`logo/${id}.svg`);
    const alt       = $derived(role && role.company ? role.company : id);
    const parent    = $derived({ "class":"work-icon", "data-cursor":"", "data-cursor-attach":`#${id}Name`, "data-follow-hover":"", "data-follow-reach":"50", "data-follow-nudge":"5", "data-follow-lerp":".2" });
    const imgProps  = $derived({ "class":"-follow" });

</script>

<Image src={src} alt={alt} props={imgProps} parent={parent} />