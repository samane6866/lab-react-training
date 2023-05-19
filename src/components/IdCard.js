function IdCard({ firstname, LastName, Gender, Height, birth }) {
  const day = birth.toLocaleString('en-us', { weekday: 'short' });
  const month = birth.toLocaleString('en-us', { month: 'short' });
  const dayOfBirth = birth.getDate();
  const yearOfBirth = birth.getFullYear();
  // toDateString();

  const fullDate = `${day} ${month} ${dayOfBirth} ${yearOfBirth}`;

  console.log(day, month, dayOfBirth, yearOfBirth);

  //Convert height in cm to m
  const heightM = Height * 0.01;

  return (
    <div className="card-container">
      <div className="card-description">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" />
        <p>
          <strong>FirstName</strong>:{firstname}
        </p>
        <p>
          <strong>LastName</strong>:{LastName}
        </p>
        <p>
          <strong>Gender</strong>:{Gender}
        </p>
        <p>
          <strong>Height</strong>:{Height / 100 + 'm'}
        </p>
        <p>
          <strong>Birth</strong>:{fullDate}
        </p>
      </div>

      <img />
    </div>
  );
}

export default IdCard;

// function Greetings({ lang, children }) {
//     return (
//       <div>
//         <p>{children}</p>
//       </div>
//     );
//   }

//   export default Greetings;
