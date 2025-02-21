import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import BoxColor from './components/BoxColor';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import FaceBook from './components/FaceBook';
import RGBColorPIcker from './components/RGBColorPicker';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio React</h1>

      <div>
        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">?</Greetings>
        <Greetings lang="en">?</Greetings>
      </div>
      <section className='card-container'>
        <h2>IdCard</h2>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <div>
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div>
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div >
        <h2>CreditCard</h2>
        <div className='cards-container'>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />

          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>

      <div>
        <h2>FaceBook</h2>
        <FaceBook />
      </div>


      <div>
        <h2>RGBColorPicker</h2>
        <RGBColorPIcker />
      </div>

    </div>
  );
}

export default App;
