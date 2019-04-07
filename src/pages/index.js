import React from "react"
import { Link } from 'gatsby'
import Header from './../components/header'


export default () => (
    <div style={{color: `purple`, fontSize: `30px`}}>
        <Header headerText="Hola"/>
        <Link to="/contact">Página de Contacto</Link>
        hola mundo
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)
