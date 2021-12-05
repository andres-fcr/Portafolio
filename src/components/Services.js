import React, { Component } from 'react';
import { ContainerPrincipal, Titulo, ContainerServicios, Containers, TituloItems, Items, BotonVerMas } from "../styled/Services.elements";
import { FaArrowRight } from "react-icons/fa"; export default class Servicios extends Component {
    render() {
        return (
            <ContainerPrincipal>
                <Titulo>
                    Servicios
                </Titulo>
                <ContainerServicios>
                    <Containers>
                        <TituloItems>Diseño</TituloItems>
                        <Items>Experiencia de usuario</Items>
                        <Items>Interfaz de usuario</Items>
                        <Items>Aplicaciones web</Items>
                        <Items>Prueba de concepto</Items>
                        <BotonVerMas>
                            Ver servicios de diseño
                            <FaArrowRight />
                        </BotonVerMas>
                    </Containers>
                    <Containers>
                        <TituloItems>Desarrollo</TituloItems>
                        <Items>Aplicaciones móviles</Items>
                        <Items>Sitios web</Items>
                        <Items>Aplicaciones web progresivas</Items>
                        <BotonVerMas>
                            Ver servicios de desarrollo
                            <FaArrowRight />
                        </BotonVerMas>
                    </Containers>
                    <Containers>
                        <TituloItems>Marca</TituloItems>
                        <Items>Identidad de la marca</Items>
                        <Items>Estrategia de marca</Items>
                        <BotonVerMas>
                            Ver servicios de marca
                            <FaArrowRight />
                        </BotonVerMas>
                    </Containers>
                </ContainerServicios>
            </ContainerPrincipal>
        )
    }
}