### 可控表單元素

```JSX
<section id="inputText">
    <h2>文字輸入框</h2>
    <input
        type="text"
        value={inputText}
        onChange={(e) => {
        setInputText(e.target.value)
        }}
    />
</section>
```
