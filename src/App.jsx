import {
  ChakraProvider,
  theme,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useMemo, useState, useEffect, useRef } from 'react';
import './App.css';
import PageOne from './Pages/Start';
import SelectCharacter from './Pages/SelectChar';
import Home from './Pages/Home/Home';
import EatPage from './Pages/Home/Eat/EatPage';
import Eat from './Pages/Home/Eat/Eat2';
import Cafe from './Pages/Cafe/Cafe';
import { AllContext } from './components/Value/CoinContext';
import MiniGamestwo from './Pages/Home/MiniGames/ButtonApp';
import Class from './Pages/Universitas/classroom';
import ToStudy from './Pages/Universitas/UnivHall'
import Library from './Pages/Universitas/library';
import Cart from './Pages/Mall/shoppingCart/appShop';
import Uni from './Pages/Universitas/UnivHall';
import Pause from './components/buttons/PauseBtn';
import Phone from './components/phone/phoneMain';
import Toast from './components/template/tempWarnPopUp';
import Mall from './Pages/Mall/Mall';

/*
1. nama
2. jurusan
3. api
4. character
5. currency
6. status dll
7. clock
8. inventory (opsional)
9. baju
10. cuaca
*/
function DragEat() {
  return <></>;
}

function App() {
  //DND
  const [isdrag, setDrag] = useState(false);
  //show pause and phone
  const [showPause, setShowPause] = useState(true);
  const handeShowPause = x => {
    setShowPause(x);
  };

  //coin const
  const [coin, setCoin] = useState(7000);
  const prevCoin = useRef();
  useEffect(() => {
    prevCoin.current = coin;
  }, [coin]);
  
  //player choice
  const [jurusan, setJurusan] = useState('');
  const [character, setCharacter] = useState(1);
  const [nama, setNama] = useState('kamu');
  
  //time const
  const [Day, setDay] = useState(0);
  const [hour, setHour] = useState(23);
  const [minute, setCount] = useState(0);
  const [countday, setCountday] = useState(0);
  
  //Status bar const
  const [makan, setMakan] = useState(70);
  const [tidur, setTidur] = useState(50);
  const [main, setMain] = useState(50);
  const [belajar, setBelajar] = useState(70);
  
  //Weather const
  const [weather, setWeather] = useState('');

  // background const
  const [bghome, setBgHome] = useState('BgPagi');
  const [bgCafe, setBgCafe] = useState('BgPagi');
  const [bgMall, setBgMall] = useState('BgPagi');
  const [bgUniv, setBgUniv] = useState('BgPagi');

  //const buat makanan
  const [foodIndex, setFoodIndex] = useState(0);
  const [burger, setBurger] = useState(2);
  const [telur, setTelur] = useState(2);
  const [ikangoreng, setIkangoreng] = useState(1);
  const [salad, setSalad] = useState(1);
  const [steak, setSteak] = useState(1);
  const [ayampanggang, setAyampanggang] = useState(1);

  //const buat bahan makanan
  const [tomato, setTomato] = useState(0);
  const [beef, setBeef] = useState(0);
  const [cabbage, setCabbage] = useState(0);
  const [chicken, setChicken] = useState(0);
  const [eggtray, setEggtray] = useState(0);

  //buat jam
  useInterval(() => {
    setCount(minute + 1);
    if (minute >= 59) {
      setHour(hour + 1);
      setCount(0);
    }
    if (hour >= 23 && minute === 59) {
      setDay(Day + 1);
      setCountday(1);
      setHour(0);
    }

    //ini buat duid harian
    if (countday == 1) {
      setCoin(coin + 2000);
      setCountday(0);
    }
  }, 1000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  //useEffect buat notif
  //notif uang jajan
  // const[first, setFirst] = useState(true);

  // const Duid = () => {
  //   console.log("nambah duit");
  //   const toast = useToast();
  //   useEffect(() => {
  //     toast({
  //       description: "koin nambah",
  //       status: "success",
  //       position : "bottom-start",
  //       isClosable: true,
  //     })
  //   }, [coin]);
  // }

  const [notifMoney, setNotifMoney] = useState(true)
  const [value, setValue] = useState(0);
  const test = useMemo(() => ({ value, setValue }), [value, setValue]);
  const [game, setGame] = useState('home');
  const handleClick = gameState => {
    setGame(gameState);
    console.log(game);
  };


  // buat pass toast to all
  useEffect(() => {
    setNotifMoney(true);
  }, [game])

  //this for hide the pause dan phone button
  useEffect(() => {
    if (game == 'start' || game == 'eat' || game == 'selectchar') {
      setShowPause(false);
    } else {
      setShowPause(true);
    }
  }, [game]);

  return (
    <ChakraProvider theme={theme}>
      <AllContext.Provider
        value={{
          coin,
          setCoin,
          prevCoin,
          notifMoney,
          nama,
          setNama,
          jurusan,
          setJurusan,
          character,
          setCharacter,
          Day,
          setDay,
          hour,
          setHour,
          minute,
          setCount,
          makan,
          setMakan,
          tidur,
          setTidur,
          main,
          setMain,
          belajar,
          setBelajar,
          weather,
          setWeather,
          game,
          setGame,
          bghome,
          setBgHome,
          burger,
          setBurger,
          telur,
          setTelur,
          ikangoreng,
          setIkangoreng,
          steak,
          setSteak,
          ayampanggang,
          setAyampanggang,
          tomato,
          setTomato,
          beef,
          setBeef,
          cabbage,
          setCabbage,
          chicken,
          setChicken,
          eggtray,
          setEggtray,
          salad,
          setSalad,
          foodIndex,
          setFoodIndex,
        }}
      >
        {showPause ? (
          <>
            <Pause />
            <Phone />
          </>
        ) : (
          ''
        )}
        {notifMoney ? null : null}
        {(() => {
          switch (game) {
            case 'start':
              return <PageOne handleClick={handleClick} />;
            case 'selectchar':
              return <SelectCharacter handleClick={handleClick} />;
            case 'home':
              return <Home handleClick={handleClick} />;
            case 'eat':
              return <EatPage handleClick={handleClick} />;
            case 'cafe':
              return <Cafe handleClick={handleClick} />;
            case 'mall':
              return <Mall handleClick={handleClick} />;
            case 'cart':
              return <Cart handleClick={handleClick} />;
            case 'uni':
              return <ToStudy handleClick={handleClick} />;
            case 'Minigames':
              return <MiniGamestwo handleClick={handleClick} />;



              case 'class':
                return <Class handleClick={handleClick} />;
              case 'library':
                return <Library handleClick={handleClick} />;
            default:
              return null;
          }
        })()}
      </AllContext.Provider>
    </ChakraProvider>
  );
}

export default App;
