module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'color-named': 'never',
    'block-no-empty': true,
    'color-function-notation': null,
    'color-hex-length': 'long',
    'comment-no-empty': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': 'numeric',
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-block-no-duplicate-selectors': null,
    'keyframe-declaration-no-important': true,
    'keyframe-selector-notation': null,
    'keyframes-name-pattern': '^((animation)((-([a-z]{1,})){1,})$)',
    'length-zero-no-unit': true,
    'media-feature-name-no-unknown': true,
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-position-at-import-rule': null,
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'selector-not-notation': null,
    'selector-no-vendor-prefix': null,
    'scss/at-rule-conditional-no-parentheses': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': '(^--rx-)|(^self$)',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'unit-allowed-list': ['%', 'deg', 'fr', 'ms', 'px', 's', 'vh', 'vw'],
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
  },
};
