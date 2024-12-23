<script lang="ts">
  import githubMarkBlack from "@/assets/github-mark-black.svg";
  import githubMarkWhite from "@/assets/github-mark-white.svg";

  interface Props {
    color: "white" | "black";
  }

  const { color }: Props = $props();

  const githubMark = $derived(
    (() => {
      switch (color) {
        case "white":
          return githubMarkWhite;
        case "black":
          return githubMarkBlack;
      }
      color satisfies never;
    })(),
  );
</script>

<img src={githubMark} alt="Github Mark" />

<style lang="scss">
  img {
    width: var(--width);
    height: var(--height);
  }
</style>
