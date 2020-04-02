import React, { Fragment, useEffect, useState} from 'react'
import {Layout} from '../components/Layout'
import Link from 'next/link'
import Error from './_error'
import EpisodesGrid from '../components/EpisodesGrid'

export default function Character ({query}) {

    const id = query.id

    const [characterState, setCharacter] = useState(null);
    const [statusCode, setStatusCode] = useState(200);

        useEffect(() => {

            let isSubscribed= true
            if (isSubscribed) {

                useCharacter()
            }

            return () => isSubscribed = false

        },[]);

    const useCharacter = async ()  =>{



            let reqCharacter = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(async (reqCharacter) => {


                    if (reqCharacter.status == 404) {
                        setStatusCode(404)

                        return null;
                    }else{

                        let character = await reqCharacter.json();
                        return {character};

                    }

            })
            .then(result => result)
            .catch(function(error){
                setStatusCode(503)
                console.log(error)
                return null;
            })

            if (reqCharacter !== null) {
                        // console.log(reqCharacter.character.name)
                        // setStatusCode(404)
                        setCharacter(reqCharacter.character)
            }





    }

    if ( statusCode !== 200) {
            return <Error statusCode={statusCode} />
    }

    return (

    <>
    { characterState != null &&

        <Layout title={characterState.name} >

            <div className='character'>
                <h1>{ characterState.name }</h1>
                <img src={characterState.image} alt={characterState.name} />
             </div>
             <div className='info'>
                <ul>
                    <li><strong>Status:</strong> {characterState.status}</li>
                    <li><strong>Species:</strong> {characterState.species}</li>
                    <li><strong>Type:</strong> {characterState.type}</li>
                    <li><strong>Gender:</strong> {characterState.gender}</li>
                    <li><strong>Origin:</strong> <a target='_blank' href={characterState.origin.url}>{characterState.origin.name}</a></li>
                </ul>
             </div>


            <EpisodesGrid episodes={characterState.episode} />





        <style jsx>{`
        .banner {
          width: 100%;
          padding-bottom: 25%;
          background-position: 50% 50%;
          background-size: cover;
          background-color: #aaa;
        }
        h1 {
            font-weight: 300;
            padding: 15px;
            text-align: left;
            color: #fff;
            width: 60%;
            margin: auto;
        }
        h2 {
          padding: 15px;
          font-size: 1.2em;
          font-weight: 600;
          margin: 0;
          color: #fff;
        }
        .character{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .character img{
            min-width: 60%;
            margin: auto;
        }
        .info{
            display: flex;
            justify-content: center;
        }
        .info ul{
            padding: 0;
            width: 60%;
        }

        .info ul li{
            list-style: none;
        }



      `}</style>
    </Layout>

    }
    </>

    )
}

Character.getInitialProps = ({query}) => {
  return {query}
}
