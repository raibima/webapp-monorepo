const Target = {
  WEB: 'web',
  NODE: 'node',
};

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const newConfig = config;
    if (dev) {
      newConfig.module.rules.push({
        test: /\.js$/,
        use: [require.resolve('source-map-loader')],
        enforce: 'pre'
      })
    }
    return newConfig;
  },
};
