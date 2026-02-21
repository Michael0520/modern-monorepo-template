import nkzw from '@nkzw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [nkzw],
  ignorePatterns: ['apps/web/next-env.d.ts'],
  rules: {
    // React Compiler compatibility rules — disabled until libraries
    // (shadcn/ui, TanStack Table, recharts) support the compiler.
    'react-hooks-js/incompatible-library': 'off',
    'react-hooks-js/purity': 'off',
    'react-hooks-js/set-state-in-effect': 'off',
  },
});
