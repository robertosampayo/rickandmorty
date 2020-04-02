// import Link from 'next/link'
import {Link} from '../../routes'
import React, { useState, useEffect } from 'react'
import Error from '../../pages/_error'
import CharacterCard from '../../components/CharacterCard'
import { AiOutlineClose } from 'react-icons/ai'

export default function CharacterGrid ({query, res, err}) {

        const [characters, setCharacters] = useState([]);
        const [statusCode, setStatusCode] = useState(200);
        const [modalState, setModalState] = useState(false)
        const [characterOpened, setCharacterOpened] = useState(null)


        useEffect(() => {
            let isSubscribed= true
            if (isSubscribed) {

                useCharacters()
            }

            return () => isSubscribed = false
        },[]);

        const useCharacters = async ()  =>{

            try{

                fetch("https://rickandmortyapi.com/api/character/")
                .then(async response => {

                    let {results} = await response.json()
                    // console.log(results)
                    setCharacters(results)
                })
                .catch(err => {
                    //console.log(err);
                    setStatusCode(404)

                });


            }catch(error){
                setStatusCode(503)
            }

        }

        if ( statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        const openModalWith = (character) =>{
            setModalState(true) // open
            setCharacterOpened(character)
        }

        const closeModal = () => {
            setModalState(false) // close
        }

        return <div>
            {modalState &&
                <div className='modal'>
                    <span className='close' onClick={e=>{e.preventDefault(); closeModal()}}><AiOutlineClose size='35px' /></span>
                    <CharacterCard character={characterOpened} />
                </div>

            }

            <div className='characters'>

                { characters.map(character => (

                    // <Link key={character.id} route='character' params={{
                    //     slug: slug(character.name),
                    //     id: character.id
                    // }} prefetch>
                        <a onClick={e => {e.preventDefault(); openModalWith(character)}} className='character' key={character.id}>
                            <img src={ character.image } alt='' />
                            <h2>{ character.name }</h2>
                        </a>
                    // </Link>
                ))}

            </div>




            <style jsx>{`
                header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
                }
                .error{
                    display: flex;
                    justify-content: center;
                    height: 50vh;
                    align-items: center;
                }
                .characters{
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    cursor:pointer;
                }
                a.character {
                display: block;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
                }
                .character img {
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                width: 100%;
                }
                h2 {
                    padding: 5px;
                    font-size: 0.9em;
                    font-weight: 400;
                    margin: 0;
                    text-align: center;
                }

                .modal{
                    position fixed;
                    top: 0;
                    left:0;
                    right:0;
                    bottom: 0;
                    z-index: 999999;
                    background: #000;
                    overflow-y: auto;
                }

                .modal .close{

                    position: absolute;
                    left: 50%;
                    top: 80px;
                    color: white;
                    cursor: pointer;
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    transform: translateX(-50%);
                }



            `}</style>
        </div>
    }

CharacterGrid.getInitialProps  = async ({query, res, err}) => {
  return {query, res, err}
}