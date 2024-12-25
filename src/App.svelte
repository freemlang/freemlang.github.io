<script lang="ts">
  import { globalTheme } from "@/lib/theme.svelte";
  import { Route, Router } from "svelte-routing";
  import Docs from "./routes/docs/page.svelte";
  import Home from "./routes/page.svelte";
  import Tutorial from "./routes/tutorial/page.svelte";

  const rootStyle = document.documentElement.style;
  $effect(() => {
    const theme = globalTheme.current;
    rootStyle.setProperty("--primary-color", theme.primary);
    rootStyle.setProperty("--background-color", theme.background);
    rootStyle.setProperty("--line-color", theme.line);
    rootStyle.setProperty("--primary-text-color", theme.text.primary);
    rootStyle.setProperty("--secondary-text-color", theme.text.secondary);
  });
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/docs" component={Docs} />
  <Route path="/tutorial" component={Tutorial} />
</Router>
