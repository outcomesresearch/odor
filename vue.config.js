const webpackParams = {
  title: 'Olfactory Dysfunction Outcomes Rating (ODOR) Questionnaire',
  description:
    "Evaluate the extent of one's physical problems, limitations, and emotional consequences of olfactory dysfunfunction with a 28-question inventory.",
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/odor/',
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/odor/' : '/',
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value;
      });
      return args;
    });
  },
};
