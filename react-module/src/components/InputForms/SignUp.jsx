import { useState, useRef } from "react";
import { TextInput } from "@mantine/core";

const Icon=()=>(
  <p style={{color: "blue", fontSize: 16}}>@</p>
)

function SignUp(props) {
  const formRef = useRef(null);
  const inputNameRef = useRef(null);
  const [inputs, setInputs] = useState({});

  const handleReset = () => {
    formRef.current.reset();
    setInputs({});
  };

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleBegin = () => {
    inputNameRef.current.focus();
  };

  return (
    <div>
      <button type="text" onClick={handleBegin}>
        Start Form Completion
      </button>
      <form
        className="sign-in-form"
        ref={formRef}
        style={{ background: "green", padding: 10 }}
        onChange={handleChange}
        onReset={handleReset}
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(inputs);
        }}
      >
        <p>{props.title}</p>
        <p>{JSON.stringify(inputs)}</p>
        <input ref={inputNameRef} type={"text"} placeholder="Имя" name="name" />
        <input type={"text"} placeholder="Ник" name="nick" />
        <input type={"email"} placeholder="Email normal input" name="email"/>
        <TextInput type={"email2"} placeholder="Email2" name="email2" icon={<Icon/>}/>
        <TextInput type={"email3"} placeholder="Email3" name="email3" icon={'@'}/>
        <label>Пол: M<input type={"radio"} placeholder="Пол" name="gender" value='M' /></label>
        <label>Пол: Ж<input type={"radio"} placeholder="Пол" name="gender" value='F'/></label>
        <input type={"password"} placeholder="Пароль" name="password"/>
        <input type={"password"} placeholder="Повторить пароль" name="password2"/>
        <button type="submit">Submit </button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default SignUp;
