module.exports = {
    'rules': {
        "adjacent-overload-signatures": true,
        "align": false,
        "array-type": false,
        "arrow-parens": [
            true,
            "ban-single-arg-parens"
        ],
        "arrow-return-shorthand": true,
        "await-promise": false,
        "ban": false,
        "ban-comma-operator": true,
        "ban-types": [
            true,
            [
                "Object",
                "Use {} instead."
            ],
            [
                "String",
                "Use 'string' instead."
            ],
            [
                "Number",
                "Use 'number' instead."
            ],
            [
                "Boolean",
                "Use 'boolean' instead."
            ]
        ],
        "binary-expression-operand-order": false,
        "callable-types": false,
        "class-name": true,
        "comment-format": false,
        "completed-docs": false,
        "curly": [
            true,
            "ignore-same-line"
        ],
        "cyclomatic-complexity": [
            true,
            20
        ],
        "deprecation": true,
        "encoding": true,
        "eofline": true,
        "file-header": false,
        "forin": true,
        "import-blacklist": false,
        "import-spacing": true,
        "indent": [
            true,
            "spaces",
            4
        ],
        "interface-name": false,
        "interface-over-type-literal": false,
        "jsdoc-format": false,
        "label-position": false,
        "linebreak-style": [
            "LF"
        ],
        "match-default-export-name": false,
        "max-classes-per-file": 3,
        "max-file-line-count": 300,
        "max-line-length": false,
        "member-access": false,
        "member-ordering": [
            true,
            {
                "order": "fields-first"
            }
        ],
        "new-parens": true,
        "newline-before-return": false,
        "newline-per-chained-call": false,
        "no-angle-bracket-type-assertion": true,
        "no-any": true,
        "no-arg": true,
        "no-bitwise": false,
        "no-boolean-literal-compare": false,
        "no-conditional-assignment": true,
        "no-consecutive-blank-lines": [
            true,
            3
        ],
        "no-construct": true,
        "no-debugger": true,
        "no-default-export": false,
        "no-duplicate-imports": true,
        "no-duplicate-super": true,
        "no-duplicate-switch-case": true,
        "no-duplicate-variable": [
            true,
            "check-parameters"
        ],
        "no-dynamic-delete": false,
        "no-empty": [
            true,
            "allow-empty-functions"
        ],
        "no-empty-interface": true,
        "no-eval": true,
        "no-floating-promises": true,
        "no-for-in-array": true,
        "no-implicit-dependencies": false,
        "no-import-side-effect": true,
        "no-inferrable-types": false,
        "no-inferred-empty-object-type": false,
        "no-internal-module": true,
        "no-invalid-template-strings": true,
        "no-invalid-this": false,
        "no-irregular-whitespace": true,
        "no-magic-numbers": true,
        "no-mergeable-namespace": true,
        "no-misused-new": false,
        "no-namespace": true,
        "no-non-null-assertion": true,
        "no-null-keyword": false,
        "no-object-literal-type-assertion": true,
        "no-parameter-properties": false,
        "no-parameter-reassignment": true,
        "no-redundant-jsdoc": true,
        "no-reference": true,
        "no-reference-import": true,
        "no-require-imports": false,
        "no-return-await": true,
        "no-shadowed-variable": false,
        "no-sparse-arrays": false,
        "no-string-literal": false,
        "no-string-throw": true,
        "no-submodule-imports": true,
        "no-switch-case-fall-through": true,
        "no-this-assignment": [
            true,
            {
                "allow-destructuring": true
            }
        ],
        "no-trailing-whitespace": true,
        "no-unbound-method": [
            true,
            "ignore-static"
        ],
        "no-unnecessary-callback-wrapper": false,
        "no-unnecessary-class": true,
        "no-unnecessary-initializer": true,
        "no-unnecessary-qualifier": false,
        "no-unnecessary-type-assertion": true,
        "no-unsafe-any": false,
        "no-unsafe-finally": true,
        "no-unused-expression": true,
        "no-use-before-declare": true,
        "no-var-keyword": true,
        "no-var-requires": true,
        "no-void-expression": false,
        "number-literal-format": true,
        "object-literal-key-quotes": false,
        "object-literal-shorthand": true,
        "object-literal-sort-keys": false,
        "one-line": true,
        "one-variable-per-declaration": [
            true,
            "ignore-for-loop"
        ],
        "only-arrow-functions": [
            true,
            "allow-declarations",
            "allow-named-functions"
        ],
        "ordered-imports": false,
        "prefer-conditional-expression": true,
        "prefer-const": true,
        "prefer-for-of": true,
        "prefer-function-over-method": false,
        "prefer-method-signature": true,
        "prefer-object-spread": true,
        "prefer-readonly": true,
        "prefer-switch": false,
        "prefer-template": true,
        "promise-function-async": true,
        "quotemark": [
            true,
            "double",
            "avoid-escape"
        ],
        "radix": false,
        "restrict-plus-operands": false,
        "return-undefined": true,
        "semicolon": [
            false,
            "always",
            "ignore-interfaces"
        ],
        "space-before-function-paren": [
            true,
            "asyncArrow"
        ],
        "space-within-parens": [
            true,
            0
        ],
        "strict-boolean-expressions": true,
        "strict-type-predicates": false,
        "switch-default": false,
        "switch-final-break": true,
        "trailing-comma": false,
        "triple-equals": [
            true,
            "allow-null-check"
        ],
        "type-literal-delimiter": false,
        "typedef": true,
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            },
            {
                "call-signature": "onespace",
                "index-signature": "onespace",
                "parameter": "onespace",
                "property-declaration": "onespace",
                "variable-declaration": "onespace"
            }
        ],
        "typeof-compare": false,
        "unified-signatures": true,
        "use-default-type-parameter": false,
        "use-isnan": true,
        "variable-name": false,
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-rest-spread",
            "check-type",
            "check-typecast",
            "check-type-operator",
            "check-preblock"
        ]
    }

};