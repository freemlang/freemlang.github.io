<script lang="ts">
  import GithubMark from "@/components/GithubMark.svelte";
  import { globalTheme } from "@/lib/theme.svelte";
  import type { ComponentProps } from "svelte";

  interface Props extends Omit<ComponentProps<typeof GithubMark>, "theme"> {}

  const props: Props = $props();
</script>

<GithubMark theme={globalTheme.current.githubMarkTheme} {...props} />
