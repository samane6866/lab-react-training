function Greeting({ lang, children }) {
  let greeting = 'Hola';

  if (lang == 'de') {
    greeting = 'Hallo';
  } else if (lang == 'fr') {
    greeting = 'Bonjour';
  } else if (lang == 'en') {
    greeting = 'Hello';
  }
  return (
    <div style={{ border: '1px solid black' }}>
      <p>
        {greeting}
        {children}
      </p>
    </div>
  );
}

export default Greeting;
