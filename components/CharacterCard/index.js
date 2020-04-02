import React, { Fragment, useEffect, useState} from 'react'
import {Layout} from '../../components/Layout'
import EpisodesGrid from '../../components/EpisodesGrid'

export default function CharacterCard ({character}) {



    return (

    <>
    { character != null &&
        <Layout title={character.name} >

            <div className='character'>
                <h1>{ character.name }</h1>
                <img src={character.image} alt={character.name} prefetch />
             </div>
             <div className='info'>
                <ul>
                    <li><strong>Status:</strong> {character.status}</li>
                    <li><strong>Species:</strong> {character.species}</li>
                    <li><strong>Type:</strong> {character.type}</li>
                    <li><strong>Gender:</strong> {character.gender}</li>
                    <li><strong>Origin:</strong> {character.origin.name}</li>
                </ul>
             </div>


            <EpisodesGrid episodes={character.episode} />






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
            width: 80%;
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
            width: 80%;
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


