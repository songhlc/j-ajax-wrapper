import {terser} from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import banner from 'rollup-plugin-banner'
import json from '@rollup/plugin-json';
import analyze from 'rollup-plugin-analyzer'
// const package = require('./package.json')
var isdebug = process.env['isdebug'] !== undefined
console.log("isdebug:", isdebug)
module.exports = {
  input: 'lib/index.js',
  external: [],
  output: {
    file: isdebug ? `dist/jAjaxWrapper.debug.js` : `dist/jAjaxWrapper.js`,
    name: 'jAjaxWrapper',
    format: 'umd',
    sourcemap: true
  },
  plugins: [
    json(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    resolve({
      preferBuiltins: true
    })]
    .concat(isdebug ? [] : [terser()])
    .concat([
      commonjs(),
      banner('jAjaxWrapper v<%= pkg.version %> by <%= pkg.author %>'),
    ])
    .concat(isdebug ? [] : [analyze()])
}
