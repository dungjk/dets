import { runTestFor } from './helper';

test('Should export the typeof reference, too', () => {
  const result = runTestFor('typeof1.ts');
  expect(result).toBe(`declare module "test" {
  export interface Foo {
    bar: typeof Bar;
  }

  export class Bar {}
}`);
});
