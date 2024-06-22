export default function InputSection({onChange, inputs}) {

  function handleInitialInvestmentChange(event) {
    onChange("initialInvestment", event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    onChange("annualInvestment", event.target.value);
  }

  function handleExpectedReturnChange(event) {
    onChange("expectedReturn", event.target.value);
  }

  function handleDurationChange(event) {
    onChange("duration", event.target.value);
  }

  return (
    <section id="user-input">
      <div class="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" value={inputs.initialInvestment} onChange={handleInitialInvestmentChange}></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" value={inputs.annualInvestment} onChange={handleAnnualInvestmentChange}></input>
        </p>
      </div>
      <div class="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" value={inputs.expectedReturn} onChange={handleExpectedReturnChange}></input>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" value={inputs.duration} onChange={handleDurationChange}></input>
        </p>
      </div>
    </section>
  );
}
