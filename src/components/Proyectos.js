import React, { Component } from 'react';
import { ContainerPrincipal, Container1, Container2, Container3, Titulo, Parrafo, ImagenGrande, ImagenesPequenias, Ventana, BotonesDiv,Boton1, Boton2, Div1, Div2, BotonVerMas, Titulo1, ParrafoPequenio } from "../styled/Proyectos.elements";
import { FaArrowRight } from "react-icons/fa";
export default class Proyectos extends Component {
    render() {
        return (
            <ContainerPrincipal>
                <Container1>
                    <Titulo>
                        Parece magia, funciona con código.
                    </Titulo>                    
                    <Parrafo>
                        A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.
                    </Parrafo>
                </Container1>                
                <Container2>
                    <ImagenGrande>
                        <Ventana>
                            <Titulo1>NIKO</Titulo1>
                            <ParrafoPequenio>Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.</ParrafoPequenio>
                            <BotonesDiv>
                                <Boton1 href="https://andres-fcr.github.io/Formulario-encuesta/">Ver proyecto completo</Boton1>
                                <Boton2 href="https://github.com/andres-fcr/Formulario-encuesta">Ver codigo</Boton2>
                            </BotonesDiv>
                        </Ventana>
                    </ImagenGrande>                    
                    <ImagenesPequenias>
                        <Div1>
                            <Ventana>
                                <Titulo1>Príncipe fresco</Titulo1>
                                <ParrafoPequenio>Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.</ParrafoPequenio>
                                <BotonesDiv>
                                <Boton2 href="https://andres-fcr.github.io/Pagina-tributo/">Ver codigo</Boton2>
                                <Boton1 href="https://github.com/andres-fcr/Pagina-tributo">Ver proyecto completo</Boton1>
                            </BotonesDiv>
                            </Ventana>
                        </Div1>                        
                        <Div2>
                            <Ventana>
                                <Titulo1>Amazonas</Titulo1>
                                <ParrafoPequenio>Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.</ParrafoPequenio>
                                <BotonesDiv>
                                <Boton1 href="https://andres-fcr.github.io/app-pets/">Ver proyecto completo</Boton1>
                                <Boton2 href="https://github.com/andres-fcr/app-pets">Ver codigo</Boton2>
                               </BotonesDiv>
                            </Ventana>
                        </Div2>
                    </ImagenesPequenias>
                </Container2>                
                <Container3>
                    <BotonVerMas href="https://github.com/andres-fcr">
                        Ver mas <FaArrowRight/>
                    </BotonVerMas>
                </Container3>            
                </ContainerPrincipal>
        )
    }
}