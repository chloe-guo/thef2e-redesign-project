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
      {
        test: /\.jsx$/,
        loader: "webpack-px-to-rem",
        query: {
          // 1rem=npx 默認為 10
          basePx: 16,
          // 只會轉換大於min的px 默認為0
          // 因為很小的px（比如border的1px）轉換為rem後在很小的設備上結果會小於1px，有的設備就會不顯示
          min: 1,
          // 轉換後的rem值保留的小數點後位數 默認為3
          floatWidth: 3,
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
