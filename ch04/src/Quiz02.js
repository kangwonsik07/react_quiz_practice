import React, { useState } from 'react'

function Quiz02() {
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      // 이 부분 작성
      const name = e.target.name
      const value = e.target.value

      // name='message'인 input 창에서 입력한 값이 20자를 넘으면
      if (name === 'message' && value.length > 20) {
         alert('20자를 초과해서 작성할 수 없습니다.')
         return //onChange 함수 종료
      }

      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }
      setForm(nextForm)
   }

   const onClick = () => {
      alert(`입력값: ${username}, ${message}`)
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" value={username} onChange={onChange} />
         <input type="text" name="message" placeholder="메시지 입력 (최대 20자)" value={message} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default Quiz02
