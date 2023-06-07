import SingleColorPicker from "./SingleColorPicker";

function RGBcolorPicker() {
  return (
    <div>
      {' '}
          <h1>soy RGB COLOR</h1>
      <SingleColorPicker color="r"/>
      <SingleColorPicker color="g" />
      <SingleColorPicker color="b" />
    </div>
  );
}
export default RGBcolorPicker;
