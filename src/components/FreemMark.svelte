<script lang="ts">
  import darkFreemMark from "@/assets/combination-mark-dark.svg";
  import lightFreemMark from "@/assets/combination-mark-light.svg";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends Omit<HTMLAttributes<HTMLImageElement>, "src" | "alt"> {
    theme: "light" | "dark";
  }

  const { theme, ...props }: Props = $props();

  const freemMark = $derived(
    (() => {
      switch (theme) {
        case "light":
          return lightFreemMark;
        case "dark":
          return darkFreemMark;
      }
      theme satisfies never;
    })(),
  );
</script>

<img src={freemMark} alt="Freem Mark" {...props} />
