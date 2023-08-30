<script>
    import { page } from '$app/stores';

    export let data;
</script>

<nav>
    <a href="/" aria-current={$page.url.pathname === '/'}>home</a>
    <a href="/account" aria-current={$page.url.pathname === '/account'}>account</a>
    <a href="/blog" aria-current={$page.url.pathname === '/blog'}>blog</a>
    <a href="/error-handling-expected" aria-current={$page.url.pathname === '/error-handling-expected'}>error-handling-expected</a>
    <a href="/error-handling-unexpected" aria-current={$page.url.pathname === '/error-handling-unexpected'}>error-handling-unexpected</a>
    {#if data.logged_in}
        <a href="/todo" aria-current={$page.url.pathname === '/todo'}>todo</a>
        <a href="/todo-form" aria-current={$page.url.pathname === '/todo-form'}>todo-form</a>
        <a href="/todo-api" aria-current={$page.url.pathname === '/todo-api'}>todo-api</a>
    {/if}
    <div style="position:absolute; right:0">
        {#if data.logged_in}
            <marquee>Welcome, thanks for logging in.</marquee>
        {/if}
    </div>
</nav>
<slot />
