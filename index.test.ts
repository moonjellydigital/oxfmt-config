import { expect, test } from 'bun:test';
import config from './index.json' with { type: 'json' };

test('config should be valid JSON', () => {
  let valid = false;
  try {
    JSON.stringify(config);
    valid = true;
  } catch (err) {
    console.error(err);
  }

  expect(valid).toBeTrue();
});
