//Resultado y no resultado//
import FetchMarvelResult from '../response-marvel.json'
//y no resultado
import FetchMarvelNoResult from '../no-response-marvel.json'
//



export function UseStateCharacter () {
    const characters = FetchMarvelResult.data.results
  
    const infoCharacterMap = characters?.map((character, index) => ({
    
      id: FetchMarvelResult.data.results[index].id,
      name: character.name,
      descrition: character.description,
      image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    }))
  
    return {characters: infoCharacterMap} //= UseStateCharacter
  
  }