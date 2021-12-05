import React, { Component } from 'react'
import { ContainerPrincipal, ContainerSecundario, Container1, Title, Container2, Parrafo, Container3, Down, ContainerTerciario, ImgFoto } from "../styled/Header.elemts";
import { FaArrowDown } from "react-icons/fa";


export default class Header extends Component {
    render() {
        return (

                <ContainerPrincipal>

                    <ContainerSecundario>

                        <Container1>
                            <Title>
                                ¡Hola a todos!
                                Soy Andres Cagua
                            </Title>
                        </Container1>
                        
                        <Container2>
                            <Parrafo>
                                Developer que le encanta implementar diseños que
                                inspiran y atraen a las personas.
                            </Parrafo>
                        </Container2>

                        <Container3>
                            <Down>
                                <FaArrowDown />
                            </Down>
                        </Container3>

                    </ContainerSecundario>

                        <ContainerTerciario>
                            <ImgFoto src="https://res.cloudinary.com/silviajcn/image/upload/v1637697092/Im%C3%A1genes%20para%20proyectos/SPRING%201/Akita_japones_b95caz.png" alt="cat"></ImgFoto>
                        </ContainerTerciario>
                        
                </ContainerPrincipal>
        )
    }
}
