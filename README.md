# React Setup

##yarn

### Step 1 install

```sh
yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### Step 2 update

```sh
yarn upgrade -R eslint
```

### .vscode setting.json

```
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#fd9347",
    "titleBar.activeBackground": "#ffa260",
    "titleBar.activeForeground": "#151b29"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}

```

### .prettierrc

```
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "endOfLine": "auto"
}
```

### .eslintignore

```
build/
node_modules/
src/serviceWorker.js
```

### .eslintrc

```
{
  "extends": ["react-app"],
  "plugins": ["prettier", "react-hooks"],
  "rules": {
    "prettier/prettier": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

```
