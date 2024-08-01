import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const viteEnv = loadEnv(mode, root)
  // 在生产环境下关闭vueDevTools，移除console 和 debugger
  const isDebugMode = viteEnv.VITE_ENV_TYPE !== 'production'
  console.log('viteEnv: ', viteEnv)
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueSetupExtend(),
      isDebugMode && vueDevTools(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: fileURLToPath(new URL('./auto-imports.d.ts', import.meta.url)),
        eslintrc: {
          // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
          enabled: false,
          filepath: fileURLToPath(new URL('./.eslintrc-auto-import.json', import.meta.url)),
          globalsPropValue: true
        },
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      viteMockServe({
        mockPath: 'mock'
      }),
      createSvgIconsPlugin({
        // 指定目录(svg存放目录）
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
        // 使用 svg 图标的格式（name为图片名称）
        symbolId: 'icon-[name]',
        //生成组件插入位置 只有两个值 boby-last | body-first
        inject: 'body-last'
      }),
      visualizer({
        // 打包后自动打开分析报告
        open: true
      }),
      viteCompression({
        verbose: true,
        disable: false, // 不禁用压缩
        deleteOriginFile: false, // 压缩后是否删除原文件
        threshold: 10240, // 压缩前最小文件大小
        algorithm: 'gzip', // 压缩算法
        ext: '.gz' // 文件类型
      })
    ],
    build: {
      outDir: `www`,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: !isDebugMode,
          drop_debugger: !isDebugMode
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      },
      postcss: {
        plugins: [
          postcsspxtoviewport8plugin({
            unitToConvert: 'px',
            viewportWidth: (file) => {
              let num = 750
              //vant是375
              if (file.indexOf('vant') > -1) {
                num = 375
              }
              return num
            },
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'vw', // 希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['ignore-'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            // replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            // include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 1628 // 横屏时使用的视口宽度
          })
        ]
      }
    }
  }
})
