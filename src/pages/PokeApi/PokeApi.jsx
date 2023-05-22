import React from 'react'
import { styled } from 'styled-components'
import { CardContainerStyled } from './cardPkm/cardPkm'
// import { initialPkm } from './data/IntialPkm'


const InputStyled = styled.input `
  
  width: 500px;
  height: 30px;
  border-radius: 10px;
  border-color: transparent;
  margin-bottom: 10px;
`


const PokeApi = () => {
  return (
    <form >

      <InputStyled />
      <CardContainerStyled><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur" /></CardContainerStyled>
    </form>
  )
}

export default PokeApi