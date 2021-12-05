import styled from "styled-components"; export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 145px;
  background-color: #161616
;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  @media screen and (max-width: 560px) {
    width: 100%;
    height: 391px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: Nunito;
  p {
    &:nth-child(2) {
      color: #fff;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #C84B31;
    }
  }
  svg {
    fill: #C84B31;
    margin-right: 0.5rem;
  }  @media screen and (max-width: 560px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`
export const ContainerTexto = styled.div`
  width: 695px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    margin-top: 44.67px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const P = styled.p`
  color: #C84B31;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 560px) {
    font-size: 20px;
    line-height: 32px;
  }
`
export const P2 = styled.p`
  color: #C84B31;
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-right: 10px;
  @media screen and (max-width: 560px) {
    font-size: 20px;
    line-height: 32px;
    margin-top: 44.67px;
    margin-bottom: 44.67px;
  }
`
export const ContainerIconos = styled.div`
  width: 144px;
  height: 32px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    margin-top: 44.67px;
  }
`
export const LinkRedes = styled.a`
  color: #C84B31;
  font-size: 32px;
  line-height: 32px;
  text-align: start;
  margin-right: 20px;
  &:hover {
    color: #FFC4E1;
    transition: 0.5s all ease;
    cursor: pointer;
  }  @media screen and (max-width: 560px) {
    margin-top: 44.67px;
  }
`