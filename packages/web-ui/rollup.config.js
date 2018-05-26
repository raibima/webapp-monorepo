import globby from 'globby';

// plugins
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';

import pkg from './package.json';

const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';

const plugins = [
  babel({
    plugins: ['external-helpers'],
  }),
  resolve(),
  commonjs(),
];
if (!dev) {
  plugins.push(uglify());
}

export default globby.sync('./src/**/*.js').map(inputFile => ({
  input: inputFile,
  output: {
    file: inputFile.replace('/src', ''),
    format: 'cjs',
    sourcemap: dev,
  },
  plugins,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
}));
