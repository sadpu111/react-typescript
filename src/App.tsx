import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => { // event만 입력하면 typescript에서 오류 발생. 특정 type을 지정하여 그에 맞는 값을 입력해야 한다. 그래서 ":React.FormEvent<HTMLInputElement>"를 입력하는데, 이는 HTML input element에 의해 발생하는 이벤트라고 typescript에 알리기 위한 것이다.
    const {currentTarget:{value}} = event; // ES6문법 (const value = event.currentTarget.value)와 동일. 다수의 변수에 event로부터 값을 가져올 때 {}안에 값 입력(ex. {value, id, tagName...})
    setValue(value); // 여기서 value는 노란색 중괄호 안에 있는 value.
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
