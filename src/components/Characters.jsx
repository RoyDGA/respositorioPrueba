import React from "react"
import FetchMarvelResult from '../response-marvel.json'

export function FetchCharacters({ characters }){
  return (
    <ul className="ListCharacters">
        {
          characters.map((character) =>
          <li key={character.id} className="character">

            <h3>{character.name}</h3>
            {/* <p>{character.descrition == '' ? 'El personaje no tiene descripcion' : character.descrition}</p> */}
            <img src={character.image} alt={character.name} />

            </li>
            )
          }
      </ul>
  )
}
export function CharacterNoExist() {
  return(
    <p>No encontrado</p>
  )
}

export function CharacterExistConfirm({ characters }){
  // const charactersExist = characters?.length > 0
  const charactersExist = characters!=200

  return(
    charactersExist ? <FetchCharacters characters = { characters }/> : <CharacterNoExist/>
    ) 
    
  }