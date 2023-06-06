module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  }
}
