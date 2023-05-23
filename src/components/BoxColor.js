function BoxColor({ r, g, b, description }) {
  const color = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '600px',
    height: '200px',
  };
  // function RgbToHex(r, g, b) {
  //   return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  // }
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)}`;

  return (
    <div>
      <div style={color}>
        {hex}
        <div>{description}</div>
      </div>
    </div>
  );
}

export default BoxColor;
