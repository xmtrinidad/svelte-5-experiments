<script lang="ts">
    let { 
        updateColor,
        updateName 
    }: {
        updateColor: (color: string) => void;
        updateName: (name: string) => void;
    } = $props();


    let color = $state('');
    let name = $state('');
</script>

<div class="settings">
    <div class="input-container">
        <label for="color">Color Hex</label>
        <input bind:value={color} type="text" id="color" name="color" placeholder="Color Hex" />
        <button onclick={() => updateColor(color)}>Update Color</button>
    </div>
    <div class="input-container">
        <label for="name">Color Hex</label>
        <input bind:value={name} type="text" id="name" name="name" placeholder="Name" />
        <button onclick={() => updateName(name)}>Update Name</button>
    </div>
</div>
