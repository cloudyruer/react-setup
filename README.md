# React Setup

### Step 1 install

```sh
yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### Step 2 update

```sh
yarn upgrade -R eslint
```

### .vscode setting.json

```json
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

### optional (change class setting)

```json
 "[javascript]": {
    "editor.formatOnSave": true
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

### JSX

#### HTML

`class=` 取代為 `className=`
`<img` 取代為 `<img alt=""`
`href="#"` 取代為 `href="#/"`
`style=""` 取代為 `style={{}}`

#### CSS

`body` 取代為 `#root`

#### 物件 or 陣列

```
setCount={(newCount) => {
      //1. 先從原本的陣列拷貝出一個新陣列(在這上面處理)
      const newProductsInOrder = [...productsInOrder]

      //2. 運算處理：更新陣列中對應商品數量
      // 更新陣列中本商品索引值，如果小於1以1來更新
      newProductsInOrder[i].count = newCount < 1 ? 1 : newCount

      //3. 設定回原本的狀態
      setProductsInOrder(newProductsInOrder)
    }}
```
