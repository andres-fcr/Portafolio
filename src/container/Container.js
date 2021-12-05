import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Proyectos from '../components/Proyectos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from '../components/Form';
import Footer from '../components/Footer';
import Servicios from '../components/Services';
import Testimonios from '../components/Testimonios';

export default class Container extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Proyectos />
                <Servicios />
                <Testimonios />
                <Formulario />
                <Footer />
            </div>
        )
    }
}
