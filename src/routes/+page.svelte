<script lang="ts">
import { page } from "$app/state";
const data = page.data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>
<form method="POST" action="?/{data.user ? 'signOut' : 'signIn'}">
    <button type="submit">Sign {data.user ? "out" : "in"}</button>
</form>

<pre>{JSON.stringify(data, null, 2)}</pre>
