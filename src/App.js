import { useState, useEffect } from "react"

import logo from './logo.svg';
import './App.css';

function App() {
  const [color1, setColor1] = useState('red')
  const [color2, setColor2] = useState('green')
  const [color3, setColor3] = useState('blue')
  const [color4, setColor4] = useState('red')
  const [color5, setColor5] = useState('green')
  const [color6, setColor6] = useState('blue')
  const [color7, setColor7] = useState('red')
  const [color8, setColor8] = useState('green')
  const [color9, setColor9] = useState('blue')

  useEffect(() => {
    setInterval(() => {newColor1()}, 1000)
    setInterval(() => {newColor2()}, 1700)
    setInterval(() => {newColor3()}, 1900)
    setInterval(() => {newColor4()}, 800)
    setInterval(() => {newColor5()}, 200)
    setInterval(() => {newColor6()}, 745)
    setInterval(() => {newColor7()}, 890)
    setInterval(() => {newColor8()}, 190)
    setInterval(() => {newColor9()}, 545)
  }, [])

  function newColor1() {
    if(color1 === 'red'){
      setColor1('green')
    }
    if(color1 === 'green'){
      setColor1('blue')
    }
    if(color1 === 'blue'){
      setColor1('red')
    }
  }

  function newColor2() {
    if(color2 === 'red'){
      setColor2('green')
    }
    if(color2 === 'green'){
      setColor2('blue')
    }
    if(color2 === 'blue'){
      setColor2('red')
    }
  }

  function newColor3() {
    if(color3 === 'red'){
      setColor3('green')
    }
    if(color3 === 'green'){
      setColor3('blue')
    }
    if(color3 === 'blue'){
      setColor3('red')
    }
  }

  function newColor4() {
    if(color4 === 'red'){
      setColor4('green')
    }
    if(color4 === 'green'){
      setColor4('blue')
    }
    if(color4 === 'blue'){
      setColor4('red')
    }
  }

  function newColor5() {
    if(color5 === 'red'){
      setColor5('green')
    }
    if(color5 === 'green'){
      setColor5('blue')
    }
    if(color5 === 'blue'){
      setColor5('red')
    }
  }

  function newColor6() {
    if(color6 === 'red'){
      setColor6('green')
    }
    if(color6 === 'green'){
      setColor6('blue')
    }
    if(color6 === 'blue'){
      setColor6('red')
    }
  }

  function newColor7() {
    if(color7 === 'red'){
      setColor7('green')
    }
    if(color7 === 'green'){
      setColor7('blue')
    }
    if(color7 === 'blue'){
      setColor7('red')
    }
  }

  function newColor8() {
    if(color8 === 'red'){
      setColor8('green')
    }
    if(color8 === 'green'){
      setColor8('blue')
    }
    if(color8 === 'blue'){
      setColor8('red')
    }
  }

  function newColor9() {
    if(color9 === 'red'){
      setColor9('green')
    }
    if(color9 === 'green'){
      setColor9('blue')
    }
    if(color9 === 'blue'){
      setColor9('red')
    }
  }

  return (
    <div style={{ width: '100vw', height: '100vh', color: 'white', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div onClick={newColor1} style={{ background: color1, width: '10vh', height: '10vh'}}></div>
          <div onClick={newColor2} style={{ background: color2, width: '10vh', height: '10vh'}}></div>
          <div onClick={newColor3} style={{ background: color3, width: '10vh', height: '10vh'}}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div onClick={newColor4} style={{ background: color4, width: '10vh', height: '10vh'}}></div>
          <div onClick={newColor5} style={{ background: color5, width: '10vh', height: '10vh'}}></div>
          <div onClick={newColor6} style={{ background: color6, width: '10vh', height: '10vh'}}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div onClick={newColor7} style={{ background: color7, width: '10vh', height: '10vh'}}></div>
          <div onClick={newColor8} style={{ background: color8, width: '10vh', height: '10vh'}}></div>
          <div onClick={newColor9} style={{ background: color9, width: '10vh', height: '10vh'}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
