import Link from 'next/link'
import React, { useState } from 'react'


export const Podcasts = ({podcasts}) => {

        const [podcastsStaste, setPodcasts] = useState(podcasts);




        return <div>

                    <h2>Ultimos Podcasts</h2>
                    { podcastsStaste.map(clip => (
                        <div key={clip.id}>{clip.title}</div>
                    ))}



        </div>
    }

