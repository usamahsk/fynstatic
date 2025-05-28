import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        service: resolve(__dirname, 'src/service.html'),
        privacy: resolve(__dirname, 'src/privacy.html'),
        careers: resolve(__dirname, 'src/careers.html'),
        blogs: resolve(__dirname, 'src/blogs.html'),
         // add other HTML files here
        contact: resolve(__dirname, 'src/contact.html'),
      },
    }
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}