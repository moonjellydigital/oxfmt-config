import { defineConfig, type OxfmtConfig } from 'oxfmt';
import config from './index.json' with { type: 'json' };

export default defineConfig(config as OxfmtConfig);
