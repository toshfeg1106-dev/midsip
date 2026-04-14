import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mid-Sip",
    pageTitleSuffix: " — Mid-Sip",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "midsip.org",
    ignorePatterns: [
      "private",
      "templates",
      "Brand-OS.md",
      ".obsidian",
      "Work/**",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F5F0E8",       // Parchment — page background
          lightgray: "#E8D5B0",   // Dried herb — borders
          gray: "#C4A882",        // Clay — secondary text
          darkgray: "#4A5240",    // Forest — body text
          dark: "#2C2C24",        // Ink — headings
          secondary: "#7A8C6E",   // Sage — links
          tertiary: "#C4A882",    // Clay — hover
          highlight: "rgba(122, 140, 110, 0.12)",
          textHighlight: "#E8D5B088",
        },
        darkMode: {
          light: "#1C1C18",       // Deep ink background
          lightgray: "#2C2C24",   // Ink — borders
          gray: "#4A5240",        // Forest — secondary
          darkgray: "#C4A882",    // Clay — body text
          dark: "#F5F0E8",        // Parchment — headings
          secondary: "#7A8C6E",   // Sage — links
          tertiary: "#C4A882",    // Clay — hover
          highlight: "rgba(122, 140, 110, 0.15)",
          textHighlight: "#7A8C6E44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
