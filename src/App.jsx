import Header from "./components/Header";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

const INITIAL_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUT);

  let annualData = calculateInvestmentResults(inputs);

  function handleChange(field, value) {
    setInputs((inputs) => ({ ...inputs, [field]: Number(value) }));
  }

  return (
    <>
      <Header />
      <InputSection onChange={handleChange} inputs={inputs} />
      <OutputSection annualData={annualData} />
    </>
  );
}

export default App;
