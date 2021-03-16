import buble from '@rollup/plugin-buble'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import del from 'del'
import { name as pkgName, version } from './package.json'

const banner = `/*
* ${pkgName} v${version}
* (c) 2021-${new Date().getFullYear()} LiLiang
* Released under the MIT License.
*/
`

del.sync('dist/*')

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    json(),
    vue(),
    buble(),
    commonjs()
  ],
  output: [
    {
      banner,
      format: 'umd',
      name: 'XView',
      file: `dist/${pkgName}.umd.min.js`,
      plugins: [terser()],
      exports: 'named',
      globals: {
        vue: 'vue'
      }
    },
    {
      banner,
      format: 'cjs',
      file: `dist/${pkgName}.common.js`,
      exports: 'named',
      globals: {
        vue: 'vue'
      }
    },
    {
      banner,
      format: 'es',
      file: `dist/${pkgName}.es.js`,
      exports: 'named',
      globals: {
        vue: 'vue'
      }
    }
  ],
  external: ['vue']
}
