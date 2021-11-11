import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'VResponsiveTable',
    exports: 'named',
  },
  plugins: [
    scss({
      output: 'dist/style.css',
    }),
    nodeResolve(),
    commonjs(),
    vue({
      css: false,
    }),
    terser(),
  ],
}
