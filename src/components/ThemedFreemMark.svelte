<script lang="ts">
  import FreemMark from "@/components/FreemMark.svelte";
  import { globalTheme } from "@/lib/theme.svelte";
  import type { ComponentProps } from "svelte";

  interface Props extends Omit<ComponentProps<typeof FreemMark>, "theme"> {}

  const props: Props = $props();
</script>

<FreemMark theme={globalTheme.current.freemMarkTheme} {...props} />
