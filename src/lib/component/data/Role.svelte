<script lang="ts">

    import type { Role, RoleProps } from "$lib/script/types";
    
    import { onMount } from "svelte";
    import { getRoleByID } from "$lib/script/helpers";
    import { followInit } from "$lib/script/effect";

    let { id, children }: RoleProps = $props();
    const role: Role | false  = $derived(getRoleByID(id));

    onMount(followInit);

</script>

{#if (role)}
    <div class="item -role" id={id}>
        <ul class="role-info text -base -uppercase -sans">
            <li>{ role.title }</li>
            <li>{ role.company }</li>
            <li>({ role.period })</li>
        </ul>
        <p class="text -xxl -regular -serif">
            {@render children?.()}
        </p>
    </div>
{/if}