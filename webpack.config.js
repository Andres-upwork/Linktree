module.exports = {
    // ...other webpack configuration options...
    module: {
      rules: [
        {
          test: /\.html$/,
          use: "html-loader",
        },
        // ...other rules...
      ],
    },
  };