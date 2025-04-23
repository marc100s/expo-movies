module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        [ "babel-preset-expo", { jsxImportSource: "nativewind" } ],
        "nativewind/babel",
      ],
      // plugins: [
      //   'nativewind/babel',
      //   // If you're using expo-router:
      //   require('expo-router/babel'),
      // ],
    };
  };

  // module.exports = function ( api ) {
  //   api.cache( true );
  //   return {
  //     presets: [
  //       [ "babel-preset-expo", { jsxImportSource: "nativewind" } ],
  //       "nativewind/babel",
  //     ],
  //   };
  // };