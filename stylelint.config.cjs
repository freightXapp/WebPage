module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
    },
  ],
  rules: {
    /** Font icons */
    'font-family-no-missing-generic-family-keyword': null,

    /** SCSS **/
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-mixin-pattern': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'function-no-unknown': null,
    'import-notation': 'string',

    /** Vuejs **/
    'value-keyword-case': null,
    'selector-not-notation': null,
    'custom-property-empty-line-before': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^v-deep/'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['/^deep/', '/^slotted/', '/^global/'],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['v-bind'],
      },
    ],
  },
}
