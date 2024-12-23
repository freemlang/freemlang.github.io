<script lang="ts">
  import Header from "@/components/Header.svelte";
</script>

<div class="container">
  <Header page="home" />
  <main>
    {#each "1".repeat(100) as i}
      <p>{i}</p>
    {/each}
  </main>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    height: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
