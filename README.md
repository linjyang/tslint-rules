# d-y-innovations/tslint-rules

```bash
npm install tslint --save-dev
npm install git+https://github.com/d-y-innovations/tslint-rules.git --save-dev
```

在项目目录建立tslint.json

extends表示采用的集合
rules可以覆盖在extends中引入的规则集合，为开发提供临时便利

```json
{
    "defaultSeverity": "error",
    "extends": [
        // "tslint:recommended"
        "tslint-rules"
    ],
    "jsRules": {},
    "rules": {
        "no-boolean-literal-compare": true,
        "variable-name": [
            true, 
            "ban-keywords", 
            "check-format", 
            "allow-leading-underscore", 
            "allow-snake-case"
        ],
        "object-literal-sort-keys": false,

        "no-any": false
    },
    "rulesDirectory": []
}
```

```bash
tslint --project tsconfig.json
tslint --fix --project tsconfig.json
```

在vscode安装tslint插件

