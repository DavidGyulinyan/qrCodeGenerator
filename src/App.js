import { useEffect, useState } from 'react';
import {useRef} from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const [qrUrl, setQrUrl] = useState("");
  const [qrImg, setQrImg] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    setQrImg(`http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrUrl}`);
  },);

  function generateQR() {
    let qrValue = inputRef.current.value.trim();
    if(!qrValue) return;
    setQrUrl(qrValue);
    setActive("active");
  }

  const inputChange = event => {
    if(event.target.value === '') setActive('inActive');
  };

  return (
    <div className={ `wrapper ${active} === 'active' ? "wrapper active" : "wrapper"` }>
      <header>
        <h1>QR Code Generator</h1>
        <p>Paste a url or enter text to create QR code</p>
      </header>
      <div class="form">
        <input ref={inputRef} onChange={inputChange} type="text" id="qr_code" name="qr_code" spellcheck="false" placeholder="Enter text or url" />
        <button onClick={generateQR}>Generate QR Code</button>
      </div>
      <div class="qr-code">
        <img src={qrImg} alt="qr-code" />
      </div>

      <div className="output-box">
                <a href={qrImg} download="QRCode">
                    <button type="button">Download</button>
                </a>
            </div>
    </div>
  );
}

export default App;