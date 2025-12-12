// @ts-check
const config = {
  title: 'Spec-Driven AI Book',
  tagline: 'Build books using AI + structured specifications.',
  
  // Vercel deployment URL
  url: 'https://your-vercel-domain.vercel.app', // replace with your actual Vercel domain
  baseUrl: '/', // root deployment

  favicon: 'img/favicon.ico',

  organizationName: 'SYEDA-NIGHAT', // GitHub username
  projectName: 'spec-driven-ai-writers-handbook', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
