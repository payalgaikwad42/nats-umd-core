import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/nats-core.umd.js',
    format: 'umd',
    name: 'NatsCore',
  },
  plugins: [nodeResolve()],
};
