<script lang="ts">
  import FreemMark from "@/components/FreemMark.svelte";
  import GithubMark from "@/components/GithubMark.svelte";
  import { config } from "@/lib/config";
  import { globalTheme } from "@/lib/theme.svelte.ts";

  interface Props {
    page: "home" | "docs";
  }

  const { page }: Props = $props();
</script>

<header>
  <section class="combination-mark">
    <div class="symbol-mark">
      <FreemMark />
    </div>
    <span class="word-mark">
      Freem
      <sup class="language-version">
        <a href={config.languageRepositoryUrl} target="_blank">{config.languageVersion}</a>
      </sup>
    </span>
  </section>
  <nav>
    <a class="github-link" href={config.organizationUrl} target="_blank">
      <GithubMark color={globalTheme.current.githubMarkColor} />
    </a>
  </nav>
</header>

<style lang="scss">
  header {
    padding: 20px 40px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--line-color);

    & > nav {
      height: 100%;
      display: flex;
      gap: 1em;
      width: max-content;
    }
  }

  .combination-mark {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.5em;
    cursor: default;
  }

  .symbol-mark {
    --height: 100%;
    height: 100%;
    display: inline-block;
  }

  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

  .word-mark {
    display: inline-block;
    font-family: "Outfit";
    font-display: block;
    font-size: 2em;
    font-weight: 400;
  }

  .language-version {
    vertical-align: super;
    font-size: 0.5em;

    & > a:not(:hover) {
      color: var(--secondary-text-color);
    }
  }

  .github-link {
    --height: 100%;
    display: block;
    width: max-content;
    height: 100%;
  }
</style>
