module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
        },
      ],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          extensions: [".ios.tsx?", ".android.tsx?", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "~": "./src",
            "@modules/classrooms": "./modules/classrooms/public",
          },
        },
      ],
    ],
  };
};
