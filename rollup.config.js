import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/wrapper.js',
    output: {
        name: 'VResponsiveTable',
        exports: 'named',
    },
    plugins: [
		nodeResolve(),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
        }),
		terser()
    ],
};