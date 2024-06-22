import AppLogo from "./assets/investment-calculator-logo.png";

function App() {
  return (
    <>
      <header id="header">
        <img src={AppLogo} alt="app logo"/>
        <h1>React Investment Calculator</h1>
      </header>
      <section id="user-input">
        <div class="input-group">
          <p>
            <label>A</label>
            <input type="text"></input>
          </p>
          <p>
            <label>B</label>
            <input type="text"></input>
          </p>
        </div>
        <div class="input-group">
          <p>
            <label>C</label>
            <input type="text"></input>
          </p>
          <p>
            <label>D</label>
            <input type="text"></input>
          </p>
        </div>
      </section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Year</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>A</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
