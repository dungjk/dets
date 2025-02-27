import { test, expect } from 'vitest';
import { runTestFor } from './helper';

test('should be able to handle incomplete prop in type definition', async () => {
  const result = await runTestFor('incomplete1.ts');
  expect(result).toBe(`declare module "test" {
  export type Endpoint = {
    endpointId: any;
    url: string;
    displayName: string;
  };
}`);
});

test('should be able to work with missing property', async () => {
  const result = await runTestFor('incomplete2.ts');
  expect(result).toBe(`declare module "test" {
  export class MyTree implements Dictionary<Array<MyElement>> {
    [Key: string]: Array<MyElement>;
  }

  export interface Dictionary<T> {
    [Key: string]: T;
  }
}`);
});
