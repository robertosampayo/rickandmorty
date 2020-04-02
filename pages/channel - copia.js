export default class extends React.Component {

    static async getInitialProps({query}) {

        let idChannel = query.id

        let [reqChannel, reqSeries, reqAudios] = await Promise.all([

            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)


        ])

        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel


        let dataAudios = await reqAudios.json()
        let audioClips = dataAudios.body.audio_clips

        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels

        return { channel, audioClips, series }

    }


    render () {
        const { channel, audioClips, series } = this.props

    return (
            <div className='channel'>
                <header>Podcasts</header>
                <img src={ channel.urls.logo_image.original } alt='' />

                <h2>Ultimos Podcasts</h2>
                <h2>{ channel.title }</h2>
                { audioClips.map(clip => (
                    <div>{clip.title}</div>
                ))}

                <h2>Series</h2>
                { series.map(serie => (
                    <div>{serie.title}</div>
                ))}

            <style jsx global>{`
                body {
                margin: 0;
                font-family: system-ui;
                background: white;
                }
            `}</style>

            <style jsx>{`
                header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
                }
                .channels{
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                }

                .channel img {
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                    width: 100%;
                }
                h2 {
                    padding: 5px;
                    font-size: 0.9em;
                    font-weight: 600;
                    margin: 0;
                    text-align: center;
                }

            `}</style>


            </div>
        )
    }
}