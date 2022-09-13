import {useState, useEffect} from 'react'
import './assets/bootstrap.min.css'
import CardCharacters from './components/CardCharacters'
import Navbar from './components/Navbar'

function App() {

  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setLoading(false)
      setCharacters(data.results)
    }
    getData()
  },[page])

  if(loading){
    return(
      <div className="container py-4 mt-4 text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container py-4">
        <h1 className="mt-4 text-center">Rick and Morty</h1>
        <hr/>
        <Navbar page={page} setPage={setPage}/>
        <div className="row">
          {
            characters.map(character => (
              <div key={character.id} className="col-md-4">
                <CardCharacters character={character}/>
              </div>
            ))
          }
        </div>
        <Navbar page={page} setPage={setPage}/>
      </div>
    </>
  )
}

export default App
