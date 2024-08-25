export default function buildLoaders() {
  return [
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
  ]
}
