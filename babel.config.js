module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          components: './src/components',
          modules: './src/modules',
          navigation: './src/navigation',
          hooks: './src/hooks',
          utils: './src/utils',
          context: './src/context',
          store: './src/store',
        },
      },
    ],
  ],
};
