import { useState, useRef } from "react";

function SignUp(props) {
  const formRef = useRef(null);
  const inputNameRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    nick: "",
    email: "",
    gender: "",
    password: "",
    password2: "",
  });

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
        <input ref={inputNameRef} type={"text"} placeholder="Имя" name="name" />
        <input type={"text"} placeholder="Ник" name="nick" />
        <input type={"email"} placeholder="Email" name="email" />
        <input type={"radio"} placeholder="Полr" name="gender" />
        <input type={"password"} placeholder="Пароль" name="password"/>
        <input type={"password"} placeholder="Повторить пароль" name="password2"/>
        <button type="submit">Submit </button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default SignUp;
