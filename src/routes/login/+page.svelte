<script>
    export let form;
</script>

<h1>log in</h1>

<!-- <form method="POST">
	<button>log in</button>
</form> -->

<form method="POST">
    <label>
        enter the passphrase
        <input name="passphrase" autocomplete="off" />
    </label>
</form>

{#if form?.incorrect}
    <p class="error">wrong passphrase!</p>
{/if}
