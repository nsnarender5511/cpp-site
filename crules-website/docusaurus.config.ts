import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'cursor++ Documentation',
  tagline: 'Agent-based AI development for Cursor IDE',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cursor-plus-plus.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cursor-ai', // Updated GitHub org name
  projectName: 'cursor-plus-plus', // Repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add custom stylesheets
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap',
      type: 'text/css',
    },
  ],

  // Adding redirects for common broken links
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/guides',
            to: '/docs/user-guide/getting-started',
          },
          {
            from: '/getting-started',
            to: '/docs/user-guide/getting-started',
          },
          {
            from: '/docs/intro',
            to: '/docs/',
          },
          {
            from: '/docs/examples/index',
            to: '/docs/examples/basic-usage',
          },
          {
            from: '/docs/api',
            to: '/docs/api-reference',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Updated GitHub repository links
          editUrl:
            'https://github.com/cursor-ai/cursor-plus-plus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Updated GitHub repository links
          editUrl:
            'https://github.com/cursor-ai/cursor-plus-plus/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Updated project's social card with correct image
    image: 'img/cursor-plus-plus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'cursor++',
      logo: {
        alt: 'cursor++ Logo',
        src: 'img/logo.svg',
      },
      style: 'primary',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/cursor-ai/cursor-plus-plus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/user-guide/getting-started',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/cursor-plus-plus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cursor_plus_plus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cursor-ai/cursor-plus-plus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cursor++. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
