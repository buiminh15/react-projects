import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils/constants'
import { Input } from '../Inputs/Input'
import { MdLocationPin, MdArrowDropDown, MdOutlineSearch } from 'react-icons/md'
import { IconContext } from 'react-icons'

const Container = styled.div`
  margin-top: 3rem;
  border-width: 0px;

  .wrapper {
    display: flex;
    align-items: center;
    height: 5.4rem;
    box-sizing: border-box;

    background: ${COLORS.white};
    border-radius: 0.8rem;

    .location,
    .search {
      display: flex;
      align-items: center;
      svg {
        padding: 0 0.8rem;
      }
    }
    .vertical-line {
      width: 0;
      height: 2rem;
      border: 0.05rem solid rgb(207, 207, 207);
    }
  }
`

const InputCustom = styled(Input)`
  border: none;
  background: ${COLORS.white};
  padding: 0.6rem 0;

  font-size: 1.6rem;
  box-sizing: inherit;
`

function SearchLocation({}) {
  return (
    <Container>
      <div className="wrapper">
        <div className="location">
          <IconContext.Provider value={{ size: '3rem', color: COLORS.red }}>
            <MdLocationPin />
          </IconContext.Provider>
          <InputCustom placeholder={'location'} />
        </div>
        <div className="vertical-line"></div>
        <div className="search">
          <IconContext.Provider value={{ size: '3rem', color: COLORS.red }}>
            <MdOutlineSearch />
          </IconContext.Provider>
          <InputCustom placeholder={'search'} />
        </div>
      </div>
    </Container>
  )
}

export default SearchLocation
