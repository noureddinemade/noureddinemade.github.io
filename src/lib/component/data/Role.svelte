<script>
    
    import { getCasesForRole, getRoleByID } from "$lib/script/helpers";
    import Button from "$lib/component/action/Button.svelte";

    let { id, children }  = $props();
    const role  = $derived(getRoleByID(id));
    const cases = $derived(getCasesForRole(id));

</script>

<div class="item" id={id} data-toggle>
    <ul class="role-info">
        <li>{ role.title }</li>
        <li>{ role.company }</li>
        <li>({ role.period })</li>
        {#if (cases.length > 0)}
            <li>
                <Button 
                    props={{
                        "class":"-display-switch -sm -off colour -misc-accent-c-base",
                        "data-cursor":"👀",
                        "data-toggle-trigger":"true",
                        "label":{ "data-text": `Case studies (${cases.length})`, "class":"text -sans -uppercase -base" }
                    }}
                />
            </li>
        {/if}
    </ul>
    <p data-toggle-element>
        {@render children?.()}
    </p>
    {#if (cases.length > 0)}
        <ol class="links -off" data-toggle-element>
            {#each cases as c}
                <li><a href={c.href}>{c.title}</a></li>
            {/each}
        </ol>
    {/if}
</div>