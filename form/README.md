### 文字輸入框

```javascript
const [inputText, setInputText] = useState('')
```

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

### 文字區域

```javascript
const [textArea, setTextArea] = useState('')
```

```JSX
<section id="textArea">
    <h2>文字區域</h2>
    <textarea
        value={textArea}
        rows="5"
        cols="50"
        style={{ resize: 'none' }}
        onChange={(e) => {
        setTextArea(e.target.value)
        }}
    />
</section>
```

### 下拉選單

```javascript
const [selectedOption, setSelectedOption] = useState('')
```

```JSX
<section id="selectedOption">
    <h2>下拉選單</h2>
    <select
        value={selectedOption}
        onChange={(e) => {
        setSelectedOption(e.target.value)
        }}
    >
        {/* 第一個值會用state的初始值 */}
        <option value="" disabled>
        請選擇
        </option>
        <option value="雞腿">雞腿</option>
        <option value="魯肉">魯肉</option>
        <option value="排骨">排骨</option>
    </select>
</section>
```

### 選項按鈕 (未使用專用元件)

```javascript
const [gender, setGender] = useState('')
```

```JSX
<section id="radioGroup">
    <h2>選項按鈕</h2>
    <input
        type="radio"
        id="male"
        value="男"
        checked={gender === '男'}
        onChange={(e) => {
        setGender(e.target.value)
        }}
    />
    <label htmlFor="male">男</label>
    <br />
    <input
        type="radio"
        id="female"
        value="女"
        checked={gender === '女'}
        onChange={(e) => {
        setGender(e.target.value)
        }}
    />
    <label htmlFor="female">女</label>
    <br />
    <input
        type="radio"
        id="other"
        value="未定"
        checked={gender === '未定'}
        onChange={(e) => {
        setGender(e.target.value)
        }}
    />
    <label htmlFor="other">未定</label>
    <br />
</section>
```

### 選項按鈕 (使用專用元件)

####專用元件

```JSX
import React from 'react'

function RadioButton(props) {
  const { value, checkedValue, setCheckedValue } = props
  return (
    <>
      <input
        type="radio"
        id={value}
        value={value}
        // checked 為 true時 選項會被勾選 反之亦然
        // 如果 當前的state(checkedValue) === 該部件的value e.g. male
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
      />
      <label htmlFor={value}>{value}</label>
    </>
  )
}

export default RadioButton

```

####主檔案

```javascript
import RadioButton from './components/RadioButton'
const [gender2, setGender2] = useState('不提供')
const genderOptions = ['男', '女', '未定', '不提供']
```

```JSX
<section id="radioButton">
    <h2>選項按鈕(專用元件)</h2>
    {genderOptions.map((v, i) => {
        return (
        <RadioButton
            key={i}
            value={v}
            checkedValue={gender2}
            setCheckedValue={setGender2}
        />
        )
    })}
</section>
```
