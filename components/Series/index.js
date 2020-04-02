import Link from 'next/link'
import React, { useState, useEffect, useContext, useCallback } from 'react'


export const Series = ({series}) => {

        const [seriesState, setSeries] = useState(series);




        return <div>


                    <h2>Series</h2>
                    { seriesState.map(serie => (
                                <div key={serie.id}>{serie.title}</div>
                            ))}




        </div>
    }

