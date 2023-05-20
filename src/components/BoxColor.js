function BoxColor({ r, g, b }) {
  const color = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '400px',
  };
  return (
    <div>
      <div style={color}></div>
    </div>
  );
}

export default BoxColor;
