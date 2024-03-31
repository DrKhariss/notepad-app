import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontFamily, setFontFamily] = useState('Arial');

  const handleFormat = (type) => {
    switch (type) {
      case 'bold':
        setBold(!bold);
        break;
      case 'italic':
        setItalic(!italic);
        break;
      case 'underline':
        setUnderline(!underline);
        break;
      default:
        break;
    }
  };

  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <button onClick={() => handleFormat('bold')}>Bold</button>
        <button onClick={() => handleFormat('italic')}>Italic</button>
        <button onClick={() => handleFormat('underline')}>Underline</button>
        <select onChange={handleFontChange} value={fontFamily}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          {/* Add more font options as needed */}
        </select>
        <input type="file" accept="image/*, video/*, .gif" />
      </div>
      <div
        contentEditable
        className="editor"
        style={{
          fontWeight: bold ? 'bold' : 'normal',
          fontStyle: italic ? 'italic' : 'normal',
          textDecoration: underline ? 'underline' : 'none',
          fontFamily: fontFamily,
        }}
        onInput={(e) => setNotes(e.target.innerText)}
      ></div>
    </div>
  );
}

export default App;