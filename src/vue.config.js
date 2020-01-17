module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@sass/_include-media.scss";`
          }
      }
    }
  };