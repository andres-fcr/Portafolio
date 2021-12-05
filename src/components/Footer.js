import React, { Component } from 'react';
import { ContainerPrincipal, LogoContainer, ContainerTexto, P, P2, ContainerIconos, LinkRedes } from "../styled/Footer.elements";
import {
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaHeart
} from "react-icons/fa";export default class Footer extends Component {
    render() {
        return (
            <ContainerPrincipal>                <LogoContainer>
                    <p>Andres' portfolio</p>
                </LogoContainer>                <ContainerTexto>
                    <P>
                        Hecho con  <FaHeart /> por Andrés.
                    </P>                    <P2>
                        Copyright 2021 - Todos los derechos reservados.
                    </P2>
                </ContainerTexto>                <ContainerIconos>
                    <LinkRedes href="https://github.com/andres-fcr" target="_blank"><FaGithub /></LinkRedes>
                    <LinkRedes href="" target="_blank"><FaInstagram /></LinkRedes>
                    <LinkRedes href="" target="_blank"><FaTwitter /></LinkRedes>
                </ContainerIconos>            </ContainerPrincipal>
        )
    }
}