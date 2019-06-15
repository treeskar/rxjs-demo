module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      { changelogFile: 'CHANGELOG.md' },
    ],
    [
      '@semantic-release/npm',
      { npmPublish: false },
    ],
    '@semantic-release/git',
    '@semantic-release/github',
  ]
};
