// webpack.config.js
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
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
