import config from './rollup.config.dev';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default Object.assign({}, config, {
  dest: 'dist/emojer.min.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
});
