import React, { useState } from 'react'
import RadioButton from './components1001/RadioButton'
import CheckBox from './components1001/CheckBox'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  // radio - 狀態記錄是被選中選項按鈕的值
  const [gender, setGender] = useState('')
  //radio - 專用元件
  const [gender2, setGender2] = useState('不提供')
  const genderOptions = ['男', '女', '未定', '不提供']
  //   checkbox - single
  const [agree, setAgree] = useState(false)

  //   checkbox - group
  const [likeList, setLikeList] = useState(['芒果'])

  // checkbox - group - 專用元件
  const [likeList2, setLikeList2] = useState([])
  const fruitOptions = ['芒果', '西瓜', '芭樂']

  return (
    <>
      <h1>可控表單元素</h1>

      {/* 文字輸入框 */}
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

      {/* 文字區域 */}
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

      {/* 下拉選單 */}
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

      {/* 選項按鈕 */}
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

      {/* 選項按鈕(專用元件) */}
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

      {/* checkbox */}
      <section id="checkboxSingle">
        <h2>單一核取方塊</h2>
        <input
          id="singleCheck"
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label htmlFor="singleCheck">我同意網站註冊規定</label>
      </section>

      {/* 多個核取方塊 */}
      <section id="checkboxGroup">
        <h2>多個核取方塊</h2>
        <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            // toggle
            // 如果這選項在陣列中 -> 移出去
            if (likeList.includes(e.target.value)) {
              // 1. 拷貝新陣列
              // 2. 在新陣列中做修改
              const newLikeList = likeList.filter((v) => v !== e.target.value)
              return setLikeList(newLikeList)
            }
            // 如果這選項不在陣列中 -> 加入陣列
            setLikeList([...likeList, e.target.value])
          }}
        />
        <label htmlFor="">芒果</label>

        <input
          type="checkbox"
          value="西瓜"
          checked={likeList.includes('西瓜')}
          onChange={(e) => {
            if (likeList.includes(e.target.value)) {
              const newLikeList = likeList.filter((v) => v !== e.target.value)
              return setLikeList(newLikeList)
            }
            setLikeList([...likeList, e.target.value])
          }}
        />
        <label htmlFor="">西瓜</label>
      </section>

      {/* 多個核取方塊(專用元件) */}
      <section id="checkboxGroup2">
        {fruitOptions.map((v, i) => {
          return (
            <CheckBox
              key={i}
              value={v}
              checkedValueList={likeList2}
              setCheckedValueList={setLikeList2}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
