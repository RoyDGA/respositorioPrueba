import React, { useState } from 'react'
import './App.css'
import { CharacterExistConfirm } from "./components/Characters.jsx";
import { UseStateCharacter } from './hook/UseStateCharacter';


function App() {
  const {characters: infoCharacterMap} = UseStateCharacter()

  return (  

    <div className='App'>
      <header className='form'>
        <form action="">

          <input type="text" placeholder='Buscar Personaje...' />
          <button type="submit">Buscar</button>

      </form>
    </header>

      <div className='renderCharactersInfo'>

        <CharacterExistConfirm characters = {infoCharacterMap}/>
      
      </div>

    </div>
  )

}

export default App
