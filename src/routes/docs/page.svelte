<script lang="ts">
  import Header from "@/components/Header.svelte";
</script>

<Header page="docs" />
<div class="container">
  <aside>
    <ol>
      <li>Example Content 1</li>
      <li>Example Content 2</li>
      <li>Example Content 3</li>
      <li>Example Content 4</li>
      <li>Example Content 5</li>
      <li>Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Content</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
      <li>dummy</li>
    </ol>
  </aside>
  <section>
    <main></main>
    <footer></footer>
  </section>
</div>

<style lang="scss">
  .container {
    height: 100%;
    display: flex;
  }

  aside {
    width: 300px;
    padding-right: 1em;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    border-right: 1px solid var(--line-color);

    & > ol > li {
      margin: 3em 2em;
      position: relative;
      word-wrap: break-word;
    }
  }

  section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }

  footer {
    height: 100px;
  }
</style>
