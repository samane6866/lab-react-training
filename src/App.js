import IdCard from './components/IdCard';
import Greeting from './components/Greetings';
import Random from './components/Random';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting lang="de">Leduwing</Greeting>
      <Greeting lang="fr">Francios</Greeting>
      <Greeting lang="es">Marcos</Greeting>
      <Greeting lang="en">Moon</Greeting>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <IdCard
        firstname="joe"
        LastName="Doe"
        Gender="female"
        Height="175"
        birth={new Date('1988-05-11')}
      />
      <IdCard
        firstname="Delores"
        LastName="obrien"
        Gender="female"
        Height={165}
        birth={new Date('1988-05-11')}
      />
      <Random />
    </div>
  );
}

export default App;

// <Greetings lang="de">Ludwig</Greetings>
//       <IdCard
