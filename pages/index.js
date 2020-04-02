
import 'isomorphic-fetch'
import Link from 'next/link'
import {Layout} from '../components/Layout'
import CharacterGrid from '../components/CharacterGrid'

export default class extends React.Component {



    render() {

        return <Layout title='Rick And Morty'>
            <CharacterGrid />

        </Layout>
    }
}