import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <section id="user-input">
        <div class="input-group">
          <p>
            <label>A</label>
            <input type="number"></input>
          </p>
          <p>
            <label>B</label>
            <input type="number"></input>
          </p>
        </div>
        <div class="input-group">
          <p>
            <label>C</label>
            <input type="number"></input>
          </p>
          <p>
            <label>D</label>
            <input type="number"></input>
          </p>
        </div>
      </section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$123</td>
            <td>$1234</td>
            <td>$1234</td>
            <td>$1234</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
