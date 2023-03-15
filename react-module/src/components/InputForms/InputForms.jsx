import SignIn from "./SignIn";
import SignUp from "./SignUp";

const InputForms = () => {
  const handleSubmit = (inputs) => {
    console.log(inputs);
  };
  return (
    <div>
      <SignIn onSubmit={handleSubmit} title='SignIn'/>
      <SignUp onSubmit={handleSubmit} title='SignUp'/>
    </div>
  );
};
export default InputForms;
