<script lang="ts">
  import Header from "@/components/Header.svelte";
  import ThemedFreemMark from "@/components/ThemedFreemMark.svelte";
</script>

<div class="container">
  <Header />
  <main>
    <section class="title-section">
      <ThemedFreemMark />
    </section>
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

  .title-section {
    margin: 10em auto;
    width: max-content;
    height: max-content;
  }

  .combination-mark {
    font-family: "Outfit";
    display: flex;
    font-size: 5em;
    gap: 0.25em;
    align-items: center;
    height: max-content;
  }

  .symbol-mark {
    --height: 100%;
    height: min-content;
    display: block;
  }

  .word-mark {
    font-size: 1em;
    display: block;
  }
</style>
