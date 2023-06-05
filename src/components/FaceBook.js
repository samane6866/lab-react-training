import profiles from '../data/berlin.json';
import { useState } from 'react';
// console.log(profiles);

// map es para transformar y filter solo para filterar

// console.log(result);

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  //cuando hago click en pic tiene que darme el nombre,...etc.

  const [pictureInfo, setPictureInfo] = useState(true);

  function handlePictureClick() {
    setPictureInfo();
  }
  function handelClosePic() {
    setPictureInfo(!pictureInfo)
  }

  const facebook = profiles.filter(
    (p) => (
      p.firstName,
      p.lastName,
      p.country,
      p.img,
      p.isStudent ? 'Student' : 'Teacher'
    )
  );

  const listItem = facebook.map((person, key) => (
    <div
      key={key}
      style={{
        backgroundColor: selectedCountry === person.country ? 'Lightblue' : ' ',

        flexDirection: 'row',
        border: '2px solid green',
        margin: '8px',
      }}
    >
      {' '}
      <li
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px',
        }}
      >
        <img
          onClick={() => handlePictureClick()|| handelClosePic()}
          style={{ width: '250px' }}
          src={person.img}
          alt={person.firstName}
        />
        {/* <button onClick={() => handelClosePic()}></button> */}

        <div style={{ display: pictureInfo ? 'none' : 'block' }}>
          <b> firstName: {person.firstName + ' '}</b>

          <b> lastName: {person.lastName + ' '}</b>
          <b>country:{person.country}</b>
        </div>
      </li>
    </div>
  ));

  const arrCountry = profiles.map((p) => p.country);
  // console.log(arrCountry);

  let result = arrCountry.filter((item, index) => {
    return arrCountry.indexOf(item) === index;
  });

  const newButton = result.map((p) => (
    <button
      style={{
        padding: '10px',
        margin: '5px',
        backgroundColor: selectedCountry === p ? 'blue' : '',
      }}
      onClick={() => handleCountryClick(p)}
    >
      {p}
    </button>
  ));
  const handleCountryClick = (p) => {
    console.log(p);
    setSelectedCountry(p);
  };

  return (
    <>
      <ul>{listItem}</ul>
      <div>{newButton}</div>
    </>
  );
}

export default FaceBook;
