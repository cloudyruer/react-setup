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
