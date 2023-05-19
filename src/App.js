import IdCard from './components/IdCard';
import Greeting from './components/Greetings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting />
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
    </div>
  );
}

export default App;

// <Greetings lang="de">Ludwig</Greetings>
//       <IdCard
