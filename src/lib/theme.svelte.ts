import type FreemMark from "@/components/FreemMark.svelte";
import type GithubMark from "@/components/GithubMark.svelte";
import type { ComponentProps } from "svelte";

export interface Theme {
  readonly primary: string;
  readonly background: string;
  readonly line: string;
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly freemMarkTheme: ComponentProps<typeof FreemMark>["theme"];
  readonly githubMarkTheme: ComponentProps<typeof GithubMark>["theme"];
}

export namespace themes {
  export const light: Theme = {
    primary: "#4287f5",
    background: "#ffffff",
    line: "#cccccc",
    text: {
      primary: "#212121",
      secondary: "#707070",
    },
    freemMarkTheme: "dark",
    githubMarkTheme: "dark",
  };

  export const dark: Theme = {
    primary: "#4287f5",
    background: "#212121",
    line: "#545454",
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    freemMarkTheme: "light",
    githubMarkTheme: "light",
  };
}

export type GlobalTheme = { current: Theme };
export const globalTheme = $state<GlobalTheme>({ current: themes.dark });
