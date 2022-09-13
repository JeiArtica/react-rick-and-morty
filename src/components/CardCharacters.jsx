import {useState} from 'react'

export default function CardCharacters({character}){

	const [status, setStatus] = useState(character.status)

	function StatusCharacters(){
		if(status === 'Alive'){
			return <span className="bg bg-success text-white p-1">{character.status}</span>
		}else if(status === 'Dead'){
			return <span className="bg bg-danger text-white p-1">{character.status}</span>
		}else{
			return <span className="bg bg-info text-white p-1">{character.status}</span>
		}
	}

	return (
		<div className="card mb-3">
            <div className="card-header">
            	<span>{character.name}</span>
            </div>
            <div className="card-body p-0">
            	<img style={{width: '100%'}} src={character.image} alt={character.name} className="img-fluid" />
            </div>
            <div className="card-footer">
            	<span>{StatusCharacters()}</span> - <span>{character.origin.name}</span>
            </div>
        </div>
	)
}