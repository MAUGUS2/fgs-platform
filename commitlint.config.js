module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation
        'style',    // Code style (formatting)
        'refactor', // Code refactoring
        'test',     // Adding tests
        'chore',    // Maintenance
        'ci',       // CI/CD changes
        'perf',     // Performance improvements
        'build'     // Build system changes
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'monorepo',     // Monorepo structure
        'tooling',      // Development tooling
        'project',      // Project-level changes
        'ui',           // UI package
        'api',          // API package
        'db',           // Database package
        'marketing',    // Marketing app
        'dashboard',    // Dashboard app
        '3d',           // 3D components
        'hooks',        // Git hooks
        'config',       // Configuration
        'docs',         // Documentation
        'ci',           // CI/CD
        'deps'          // Dependencies
      ]
    ],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  }
}