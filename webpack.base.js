module.exports = {
  // webpack merge uses this in both
  // client and server webpack files.
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: ['transform-class-properties']
        },
        exclude: /node_modules/
      }
    ]
  }
};
