import React, { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('')
  const [boxes, setBoxes] = useState([])
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setColor(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidColor(color)) {
      setBoxes([...boxes, color])
      setColor('')
      setError('')
    } else {
      setError(
        <>
        <p>Invalid color. </p>
        <p>Please enter a valid color name.</p>
        <p>Only English colors are accepted.</p>
      </>
      )
    }
  };

  const isValidColor = (strColor) => {
    const s = new Option().style
    s.color = strColor
    return s.color !== '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="Enter a color"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Color</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.boxContainer}>
        {boxes.map((boxColor, index) => (
          <div key={index} style={{ ...styles.box, backgroundColor: boxColor }}>
            {boxColor}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '20px',
  },
  boxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  box: {
    width: '100px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '4px',
  },
};

export default ColorBox;
