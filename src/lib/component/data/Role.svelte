<script lang="ts">

    import type { Role, Case, RoleProps } from "$lib/script/types";
    
    import { onMount } from "svelte";
    import { getCasesForRole, getRoleByID } from "$lib/script/helpers";
    import { followInit } from "$lib/script/effect";
    
    import Button from "$lib/component/action/Button.svelte";

    let { id, children }: RoleProps = $props();
    const role: Role | false  = $derived(getRoleByID(id));
    const cases: Case[] | undefined = $derived(getCasesForRole(id));

    onMount(followInit);

</script>

<div class="item -role" id={id} data-toggle>
    {#if (role)}
        <ul class="role-info text -base -uppercase -sans">
            <li>{ role.title }</li>
            <li>{ role.company }</li>
            <li>({ role.period })</li>
            {#if (cases && cases.length > 0)}
                <li>
                    <Button 
                        props={{
                            "class":"-display-switch -sm -off colour -misc-accent-c-base",
                            "data-cursor":"👀",
                            "data-toggle-trigger":"true",
                            "label":{ "data-text": `Show Case studies (${cases.length})`, "class":"text -sans -uppercase -base" }
                        }}
                    />
                </li>
            {/if}
        </ul>
    {/if}
    <p class="text -xxl -regular -serif" data-toggle-element>
        {@render children?.()}
    </p>
    {#if (cases && cases.length > 0)}
        <ol class="links -off text -xl -serif -regular" data-toggle-element>
            {#each cases as c}
                <li><a href={c.href}>{@html c.title}</a></li>
            {/each}
        </ol>
    {/if}
</div>