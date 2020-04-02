export default class extends React.Component {
    render() {
        return <div>
            <img src='/platzi-logo.png' alt='Platzi' />
            <h1>Creado por Robert</h1>
            <p>Viendo el curso de Next en Platzi</p>



            <style jsx>{`
                div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                }
                h1{
                    color: #97c93e; margin-bottom: 0px;
                }
                img{ max-width: 50%; display: block; margin: 0 auto; }

            `}</style>

            <style jsx global>{`
                body{ background-color: #eee;}
            `}</style>
        </div>
    }
}