import React,{Fragment} from 'react'
import Link from 'next/link'
import {Layout} from '../components/Layout'

function Error({ statusCode }) {
  return (
    // <Layout title='Oh no :(' >
    <div className='message'>
      {statusCode == 404 ?
        <>
        <h1>Esta página no existe :(</h1>
        <p><Link href='/'><a>Volver a la home</a></Link></p>
        </>
        :<p>Ups!, un error <strong>{statusCode}</strong> ha occurido en el servidor.</p>


      }

        <style jsx>{`
            .message {
                padding: 100px 30px;
                text-align: center;
            }
            h1 {
                margin-bottom: 2em
            }
            a {
                color: #8756ca;
            }
        `}

        </style>
    </div>
    // </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error