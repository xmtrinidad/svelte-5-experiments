<script lang="ts">
	import { onMount } from "svelte";



  onMount(async () => {
    // Fetch blueprints data from the API
    const res = await fetch('/api/blueprints-api');
    const data = await res.json();
    console.log(data);

  });
</script>

<h1>Blueprints</h1>