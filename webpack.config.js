// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
                rootValue: 16,
                propList: ["*"],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.pug$/,
        oneOf: [
          // `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"],
          },
          // JavaScript 内的 pug 導入
          {
            use: ["raw-loader", "pug-plain-loader"],
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
