import {buildSync} from 'esbuild';


console.log('Building dist for node (cjs)...');

const target = ['ES2019', 'node14.6'];
buildSync({
  entryPoints: ['./src/index.ts'],
  outdir: './dist/cjs',
  minify: true,
  format: 'cjs',
  platform: 'node',
  target: ['ES2019', 'node14.6']
})

console.log('Building dist for node type=module (esm)...');
buildSync({
  entryPoints: ['./src/index.ts'],
  outdir: './dist/esm',
  sourcemap: false,
  minify: true,
  splitting: true,
  format: 'esm',
  target,
  outExtension: { '.js': '.mjs' },
});
