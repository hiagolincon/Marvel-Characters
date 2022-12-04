module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: extendDefaultPlugins([
            {
              name: 'removeAttrs',
              params: { attrs: '(data-name)' },
            },
            'cleanupIDs',
          ]),
        },
      },
    ],
  ],
};
