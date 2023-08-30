<script>
    export let form;
</script>
<h1>account</h1>

<form method="POST">
    <label>
        enter the passphrase
        <input name="passphrase" autocomplete="off" />
    </label>
</form>

{#if form?.incorrect}
    <p class="error">wrong passphrase!</p>

{/if}

