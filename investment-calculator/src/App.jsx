import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 12,
  });

  function handleInputChange(inputName, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputName]: newValue,
      };
    });
  }

  const checkValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      {!checkValid && (
        <p className="center">Please input positive duration ya!</p>
      )}
      {checkValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
