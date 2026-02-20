export default [
  {
    test: {
      include: ['packages/shared/src/**/*.test.ts'],
      name: 'shared',
    },
  },
  {
    test: {
      environment: 'jsdom',
      include: ['apps/web/src/**/*.test.{ts,tsx}'],
      name: 'web',
    },
  },
  {
    test: {
      include: ['apps/server/src/**/*.test.ts'],
      name: 'server',
    },
  },
];
