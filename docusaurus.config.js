// @ts-check
const config = {
  title: 'Spec-Driven AI Book',
  tagline: 'Build books using AI + structured specifications.',
  url: 'https://YOUR_USERNAME.github.io',
  baseUrl: '/YOUR_REPO_NAME/',
  favicon: 'img/favicon.ico',

  organizationName: 'YOUR_USERNAME', // GitHub username
  projectName: 'YOUR_REPO_NAME',     // Repo name

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
