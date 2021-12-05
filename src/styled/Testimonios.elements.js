import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 840px;
  background-color: #161616;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 0px;
  margin-top: 0px;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 1480px;
  }
`

export const Titulo = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #ECDBBA;
  letter-spacing: -0.005em;
  margin-left: 72px;
  margin-top: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 375px) {
    margin-left: 20px;
    font-size: 32px;
  }
`

export const ContainerTestimonios = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 391.33px);
  grid-template-rows: repeat(2, 264px);
  grid-gap: 24px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 72px;
  margin-top: 80px;
  margin-bottom: 80px;
  @media screen and (max-width: 375px) {
    display: grid;
    grid-template-columns: 320px;
    grid-template-rows: 192px;
    grid-gap: 10px;
    margin-left: 20px;
    margin-top: 24px;
  }
`

export const TestimoniosUsuarios = styled.div`
  width: 391.33px;
  height: 264px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 375px) {
    width: 320px;
    height: 192px;
  }
`

export const Usuario = styled.div`
  width: 391.33px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 375px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const Foto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
  @media screen and (max-width: 375px) {
    margin-right: 8px;
  }
`

export const Nombre = styled.h4`
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #C84B31;
  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`

export const Parrafo = styled.p`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  color: #ECDBBA;
  text-align: start;
  margin-top: 16px;
  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`
