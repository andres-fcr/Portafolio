import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 632px;
  background-color: #C84B31;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 0px;
  margin-top: 0px;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 984px;
  }
`
export const Titulo = styled.h2`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #0F0E17;
  letter-spacing: -0.005em;
  margin-left: 72px;
  margin-top: 80px;
  @media screen and (max-width: 375px) {
    font-size: 32px;
    margin-top: 40px;
    line-height: 40px;
    letter-spacing: 0.01em;
  }
`
export const ContainerServicios = styled.div`
  width: 1222px;
  height: 368px;
  display: grid;
  grid-template-columns: repeat(3, 391px);
  grid-template-rows: 264px;
  margin-left: 72px;
  margin-top: 48px;
  @media screen and (max-width: 375px) {
    display: grid;
    grid-template-columns: 320px;
    grid-template-rows: 288px;
    margin-top: 32px;
    height: 904px;
    margin-left: 20px;
  }
`
export const Containers = styled.div`
  width: 391px;
  height: 368px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  @media screen and (max-width: 375px) {
    width: 320px;
    height: 320px;
    margin-right: 20px;
  }
`
export const TituloItems = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.005em;
  color: #0F0E17;
  @media screen and (max-width: 375px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.01em;
  }
`
export const Items = styled.p`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  color: #0F0E17;
`
export const BotonVerMas = styled.button`
  width: 246px;
  height: 48px;
  background: #0F0E17;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #346751;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #346751;
  margin-right: 8px;
  display: flex;
  justify-content: space-around;  @media screen and (max-width: 375px) {
    width: 320px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
  }
`