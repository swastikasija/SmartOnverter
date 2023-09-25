import { useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const Onchange = (e) => {
    setText(e.target.value);
  };
  const lowerCase = () => {
    let loweredText = text.toLowerCase();
    setText(loweredText);
  };
  const upperCase = () => {
    let upperedText = text.toUpperCase();
    setText(upperedText);
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
    alert("Text is Copied to Clipboard");
  };
  const capitalize = () => {
    let capitalizedText = text.replace(/(?:^|\s)\S/g, function (match) {
      return match.toUpperCase();
    });
    setText(capitalizedText);
  };
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          <h1>Smart Converter</h1>
        </label>
        <textarea
          class="form-control"
          onChange={Onchange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="9"
          cols="120"
        ></textarea>
        <div className="mt-5">
          <button
            class="btn btn-outline-success me-5"
            onClick={lowerCase}
            type="submit"
          >
            Lower Case
          </button>
          <button
            class="btn btn-outline-success me-5"
            type="submit"
            onClick={capitalize}
          >
            Capitalize
          </button>
          <button
            class="btn btn-outline-success me-5"
            type="submit"
            onClick={upperCase}
          >
            Upper Case
          </button>
          <button className="btn btn-outline-success me-5" onClick={copy}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
