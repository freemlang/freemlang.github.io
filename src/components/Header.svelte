<script lang="ts">
  import ThemedFreemMark from "@/components/ThemedFreemMark.svelte";
  import ThemedGithubMark from "@/components/ThemedGithubMark.svelte";
  import { config } from "@/lib/config";
  import { Link } from "svelte-routing";
</script>

<header>
  <section class="combination-mark">
    <Link class="home-anchor" to="/">
      <ThemedFreemMark class="freem-mark" />
    </Link>
    <span class="language-version">
      <sup>
        <a href={config.languageRepositoryUrl} target="_blank">{config.languageVersion}</a>
      </sup>
    </span>
  </section>
  <section class="menu">
    <nav class="internal-link-nav">
      <Link to="/docs">Docs</Link>
    </nav>
    <nav class="external-link-nav">
      <a class="github-link" href={config.organizationUrl} target="_blank">
        <ThemedGithubMark />
      </a>
    </nav>
  </section>
</header>

<style lang="scss">
  header {
    padding: 0 40px;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--line-color);
  }

  .combination-mark {
    height: 100%;
    display: flex;
    gap: 0.2rem;
    align-items: center;
    font-display: block;

    & > :global(.home-anchor) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 100%;

      & > :global(.freem-mark) {
        height: 2rem;
      }
    }
  }

  .language-version {
    font-family: "Outfit";
    font-size: 2em;

    & > sup {
      vertical-align: super;
      font-size: 0.5em;

      & > a:not(:hover) {
        color: var(--secondary-text-color);
      }
    }
  }

  .menu {
    height: 100%;
    display: flex;
    gap: 3em;
  }

  .internal-link-nav {
    display: flex;
    height: 100%;
    gap: 1em;

    & > :global(a) {
      padding: 0 1em;
      width: max-content;
      align-content: center;
      position: relative;
      font-size: 1.1em;

      &:not(:hover) {
        color: var(--secondary-text-color);
      }

      &:hover::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--primary-text-color);
      }
    }
  }

  .external-link-nav {
    height: 100%;
    display: flex;
    gap: 1em;
    width: max-content;
  }

  .github-link {
    --height: 100%;
    display: block;
    width: max-content;
    height: 100%;
  }
</style>
