export default function InputSection({ onChange, inputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={inputs.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={inputs.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={inputs.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={inputs.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
