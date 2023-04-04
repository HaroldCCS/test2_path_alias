// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     //if you already have other plugin just paste this lines below
//     [
//       'module-resolver',
//       {
//         root: ['./src'],
//         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
//         alias: {
//           '@components': './src/components',
//         },
//       },
//     ],
//   ],
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            app_components: './src/commons',
            perro: './commons',
          },
        },
      ],
    ],
  };
};
