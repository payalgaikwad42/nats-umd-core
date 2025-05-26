import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';


export default {
  input: 'src/nats.ts',
  output: [
    {
      file: 'dist/nats.js',
      format: 'umd',
      name: 'NATS', // window.NATS
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/nats.min.js',
      format: 'umd',
      name: 'NATS',
      exports: 'named',
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    typescript(),
  ]
};
