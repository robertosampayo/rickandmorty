import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Error from '../../pages/_error'

export default function CharacterGrid ({episodes}) {



        let episodesList = []
        episodes.map(episode => {
            let episodeNumber = episode.substring(episode.lastIndexOf('/') + 1);
            let url = ''
            if (episodeNumber <= 11) {
                url = 'https://www.rick-morty.online/temporada-1/capitulo-'+getCorrectEpisode(episodeNumber)
            }
            if(episodeNumber > 11 && episodeNumber <= 21) {
                url =  'https://www.rick-morty.online/temporada-2/capitulo-'+getCorrectEpisode(episodeNumber)
            }
            if(episodeNumber > 21 && episodeNumber <= 31) {
                url = 'https://www.rick-morty.online/temporada-3/capitulo-'+getCorrectEpisode(episodeNumber)
            }
            if(episodeNumber > 31 && episodeNumber <= 36) {
                url = 'https://www.rick-morty.online/temporada-4/capitulo-'+getCorrectEpisode(episodeNumber)
            }

            episodesList.push(
                {url: url, id: episodeNumber }
            )

        })

        function getCorrectEpisode (id) {
            let list = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:11, 12:1, 13:2, 14:3, 15:4, 16:5, 17:6, 18:7, 19:8, 20:9, 21:10, 22:1, 23:2, 24:3, 25:4, 26:5, 27:6, 28:7, 29:8, 30:9, 31:10, 32:1, 33:2, 34:3, 35:4, 36:5}
            return list[id]
        }




        return (<div>


            <h1>Appearance Episodes</h1>
            <div className='episodes'>
                <ul>
                { episodesList.map(episode => (

                        <li key={episode.id}>

                                <a href={episode.url} target='_blank' className='episodes' id={episode.id}>
                                    <p>{ episode.url.substring(episode.url.lastIndexOf('/') + 1) }</p>
                                </a>
                        </li>

                ))}
                </ul>

            </div>




            <style jsx>{`

                .episodes {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                }
                h1 {
                        text-align: center;
                        font-weight: 400;
                        width: 80%;
                        margin: 0 auto;
                        padding: 0.5em;
                        background: #97ce4c;
                        border-radius: 5px;
                        font-size: 20px;
                        color: #000;
                }

                .episodes ul { padding: 0;}

                .episodes ul li{
                    list-style: none;
                }
                p{
                    margin: 0.8em;
                }

                .episodes a{
                    text-decoration: none;
                }

            `}</style>
        </div>
    )}
