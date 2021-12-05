import React, { Component } from 'react';
import { ContainerPrincipal, Titulo, ContainerTestimonios, TestimoniosUsuarios, Usuario, Foto, Nombre, Parrafo } from "../styled/Testimonios.elements";

export default class Testimonios extends Component {
    render() {
        return (
            <div>

                <ContainerPrincipal>
    
                    <Titulo>
                        Testimonios
                    </Titulo>
                    
                    <ContainerTestimonios>
    
                            <TestimoniosUsuarios>
                                <Usuario>
                                   <Foto src="https://res.cloudinary.com/silviajcn/image/upload/v1638637277/Perfil%20Usuarios/Perfil%20Usuarios%202/hombre7_m0p6wa.jpg" alt="..."></Foto>
                                   <Nombre>Juan Antonio</Nombre>
                                </Usuario>
                                <Parrafo>Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Andrés y como utiliza Javascript en el día a día.</Parrafo>
                            </TestimoniosUsuarios>
    
                           <TestimoniosUsuarios>
                                <Usuario>
                                   <Foto src="https://res.cloudinary.com/silviajcn/image/upload/v1638637269/Perfil%20Usuarios/Perfil%20Usuarios%202/hombre6_iimkfk.jpg" alt="..."></Foto>
                                   <Nombre>Albert Flores</Nombre>
                                </Usuario>
                                <Parrafo>Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente profesor Andrés gran vocación.</Parrafo>
                            </TestimoniosUsuarios>
    
                            <TestimoniosUsuarios>
                                <Usuario>
                                   <Foto src="https://res.cloudinary.com/silviajcn/image/upload/v1638637272/Perfil%20Usuarios/Perfil%20Usuarios%202/mujer11_da9lsh.jpg" alt="..."></Foto>
                                   <Nombre>Darlene Robertson</Nombre>
                                </Usuario>
                                <Parrafo>Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.</Parrafo>
                            </TestimoniosUsuarios>
    
                            <TestimoniosUsuarios>
                                <Usuario>
                                   <Foto src="https://res.cloudinary.com/silviajcn/image/upload/v1638637252/Perfil%20Usuarios/Perfil%20Usuarios%202/mujer8_ccm6un.jpg" alt="..."></Foto>
                                   <Nombre>Jane Cooper</Nombre>
                                </Usuario>
                                <Parrafo>La forma como explica y trabaja los temas Andrés, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS. </Parrafo>
                            </TestimoniosUsuarios>
                        
                        <TestimoniosUsuarios>
                            <Usuario>
                                <Foto src="https://res.cloudinary.com/silviajcn/image/upload/v1638637240/Perfil%20Usuarios/Perfil%20Usuarios%202/mujer4_egcgq2.jpg" alt="..."></Foto>
                                <Nombre>Eleanor Pena</Nombre>
                            </Usuario>
                            <Parrafo>Andrés ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses.</Parrafo>
                        </TestimoniosUsuarios>
    
                        <TestimoniosUsuarios>
                            <Usuario>
                                <Foto src="https://res.cloudinary.com/silviajcn/image/upload/v1638637254/Perfil%20Usuarios/Perfil%20Usuarios%202/hombre3_pgfcum.jpg" alt="..."></Foto>
                                <Nombre>Guy Hawkins</Nombre>
                            </Usuario>
                            <Parrafo>Andrés ha superado mis expectativas desde el diseño hasta el desarrollo.</Parrafo>
                        </TestimoniosUsuarios>
    
                    </ContainerTestimonios>
                    
                </ContainerPrincipal>
                
                <img width="100%" src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638665846/appmascotas/img_xnesjx.png" />
            </div>
        )
    }
}