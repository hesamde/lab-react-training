import './App.css';
import './index.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import FaceBook from './components/FaceBook'
import SignupPage from './components/SignupPage';
// import RGBColorPicker from './components/RGBColorPicker';





function App() {
  return (

<div className="App">
  <div className='item-container'>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <BoxColor/>
        <BoxColor/>
        <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="#311465"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#000080"
        color="white"
        white
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#Bf0A30"
        color="white"
      />
      <div className="ratings">
        <div className="rate"><Rating>0</Rating></div>
        <div className="rate"><Rating>1.49</Rating>{' '}</div>
        <div className="rate"><Rating>1.5</Rating></div>
        <div className="rate"><Rating>3</Rating></div>
        <div className="rate"><Rating>4</Rating>{' '}</div>
        <div className="rate"><Rating>5</Rating></div>
      </div>
      <div className="driverCards">
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"}}/>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"}}/>
      </div>
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
      <Greetings/>
      <Random/>
      <div className="btn-like">
<h2>Iteration 8</h2>
      <LikeButton />
      <LikeButton />
    </div>
<h2>Iteration 9</h2>
      <ClickablePicture
      img='maxence.png'
      imgClicked='maxence-glasses.png'/>
      <h2>Iteration 10</h2>
        <Dice/>
          <h2>Iteration 11</h2>
        <Carousel
            images={[
              'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/men/1.jpg',
                  'https://randomuser.me/api/portraits/women/2.jpg',
                    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
<h2>Iteration 12</h2>
    <NumbersTable limit={12} />
<h2>Iteration 13 - 14</h2>
<FaceBook />
<h2>Iteration 15</h2>
<SignupPage />
  </div>
</div>
  );
}

export default App;