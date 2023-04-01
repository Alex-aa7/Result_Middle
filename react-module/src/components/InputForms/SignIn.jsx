import { useState, useRef } from "react";

function SignIn(props) {
  const formRef = useRef(null);
  const inputNameRef = useRef(null);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
        style={{ background: "blue", padding: 10 }}
        onChange={handleChange}
        onReset={handleReset}
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(inputs);
        }}
      >
        <p>{props.title}</p>
        <input
          ref={inputNameRef}
          type={"email"}
          placeholder="enter Email"
          name="email"
        />
        <input type={"password"} placeholder="enter Password" name="password" />
        <button type="submit">Войти</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default SignIn;
