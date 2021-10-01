import React from 'react'

function CheckBox(props) {
  const { value, checkedValueList, setCheckedValueList } = props

  const handleChange = (e) => {
    const value = e.target.value
    // 如果目前在這狀態陣列 -> 移出
    if (checkedValueList.includes(value)) {
      // 1. 先從狀態陣列拷貝出新陣列
      // 2. 在拷貝的新陣列上處理
      const newLikeList = checkedValueList.filter((v, i) => {
        return v !== value
      })
      // 3. 設定回狀態陣列
      return setCheckedValueList(newLikeList)
    }

    // 如果沒在這狀態陣列中 -> 加入
    setCheckedValueList([...checkedValueList, value])
  }

  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
      />
      <label>{value}</label>
    </>
  )
}

export default CheckBox
