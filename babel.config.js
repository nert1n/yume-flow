module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // необхідно для expo-router
      'expo-router/babel',
      // плагін Reanimated завжди має бути останнім
      'react-native-reanimated/plugin',
    ],
  }
}
