import IdCard from './components/IdCard';
import Greeting from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import './App.css';
import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton';
import FaceBook from './components/FaceBook';
import NumberTab from './components/NumberTab';
import RGBcolorPicker from './components/RGBcolorPicker';
import SingleColorPicker from './components/SingleColorPicker';


function App() {
  return (
    <div className="App">


      <RGBcolorPicker />
      
      <NumberTab limit={36} />
      
      <FaceBook />
      <LikeButton />
      <LikeButton />
      <Greeting lang="de">Leduwing</Greeting>
      <Greeting lang="fr">Francios</Greeting>
      <Greeting lang="es">Marcos</Greeting>
      <Greeting lang="en">Moon</Greeting>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <CreditCard
        type="Visa"
        number={'0123456789018845'}
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <IdCard
        firstname="joe"
        LastName="Doe"
        Gender="female"
        Height="175"
        birth={new Date('1988-05-11')}
      />
      <IdCard
        firstname="Dolores"
        LastName="obrien"
        Gender="female"
        Height={165}
        birth={new Date('1988-05-11')}
      />
      <BoxColor r={255} g={0} b={0} description="rgb(255,0,0)" />

      <BoxColor r={128} g={255} b={0} description="rgb(128,255,0)" />

      <CreditCard
        type="Visa"
        number={'0123456789018845'}
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number={'0123456789010995'}
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maziya Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number={'0123456789016984'}
        expirationMonth={3}
        expirationYear={2021}
        bank="BVVA"
        owner="Sara Bouret"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;

// <Greetings lang="de">Ludwig</Greetings>
//       <IdCard
