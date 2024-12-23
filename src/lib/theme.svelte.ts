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
  readonly githubMarkColor: ComponentProps<typeof GithubMark>["color"];
}

export namespace themes {
  export const light: Theme = {
    primary: "#7e00fe",
    background: "#ffffff",
    line: "#cccccc",
    text: {
      primary: "#212121",
      secondary: "#707070",
    },
    githubMarkColor: "black",
  };

  export const dark: Theme = {
    primary: "#7e00fe",
    background: "#212121",
    line: "#545454",
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    githubMarkColor: "white",
  };
}

export type GlobalTheme = { current: Theme };
export const globalTheme = $state<GlobalTheme>({ current: themes.dark });
