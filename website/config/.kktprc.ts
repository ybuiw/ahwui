import pkg from '../package.json';
export default {
  initEntery: true,
  initRoutes: true,
  publicPath: './',
  define: {
    VERSION: pkg.version,
  },
};
