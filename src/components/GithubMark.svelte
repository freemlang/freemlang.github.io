<script lang="ts">
  import darkGithubMark from "@/assets/github-mark-dark.svg";
  import lightGithubMark from "@/assets/github-mark-light.svg";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends Omit<HTMLAttributes<HTMLImageElement>, "src" | "alt"> {
    theme: "light" | "dark";
  }

  const { theme, ...props }: Props = $props();

  const githubMark = $derived(
    (() => {
      switch (theme) {
        case "light":
          return lightGithubMark;
        case "dark":
          return darkGithubMark;
      }
      theme satisfies never;
    })(),
  );
</script>

<img src={githubMark} alt="Github Mark" {...props} />
