# Oxfmt Config

A shareable [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) config.

## Installation

npm:

```shell
npm install --save-dev @moonjellydigital/oxfmt-config
```

bun:

```shell
bun add -D @moonjellydigital/oxfmt-config
```

yarn:

```shell
yarn add -D @moonjellydigital/oxfmt-config
```

pnpm:

```shell
pnpm add -D @moonjellydigital/oxfmt-config
```

## Usage

Import in your `oxfmt.config.ts` or `oxfmt.config.mts` file:

```typescript
import { defineConfig } from 'oxfmt';
import config from './index.json' with { type: 'json' };

// use the config as-is
export default defineConfig(config);

// override or extend the config
export default { ...config, astro: true };
```

If you're getting type error `TS2345: Argument of type '{ ... }' is not assignable to parameter of type 'OxfmtConfig'.`:

```typescript
import { defineConfig, type OxfmtConfig } from 'oxfmt';
import config from './index.json' with { type: 'json' };

// use the config as-is
export default defineConfig(config as OxfmtConfig);

// override or extend the config
export default defineConfig({ ...(config as OxfmtConfig), astro: true });
```

## License

[MIT](./LICENSE)
