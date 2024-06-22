export default function InputSection({onChange}) {
  return (
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
  );
}
