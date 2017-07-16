import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  moduleName: 'emojer',
  dest: 'dist/emojer.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  watch: {
    exclude: ['node_modules/**']
  }
};