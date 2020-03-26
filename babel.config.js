module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                    '.svg'
                ],
                alias: {
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                    "@navigations": "./src/navigations",
                    "@screens": "./src/screens",
                    "@utils": "./src/utils",
                    "@redux": "./src/redux",
                    "@theme": "./src/theme",
                    "@define": "./src/define"
                },
                cwd: "babelrc"
            }
        ]
    ]
};
