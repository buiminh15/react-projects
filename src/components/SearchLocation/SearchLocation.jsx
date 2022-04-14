import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../utils/constants'
import { Input } from '../Inputs/Input'
import { MdLocationPin, MdArrowDropDown, MdOutlineSearch, MdMyLocation } from 'react-icons/md'
import { IconContext } from 'react-icons'

const Container = styled.div`
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

      position: relative;

      .location-icon,
      .search-icon {
        padding: 0 0.8rem;
      }
    }
    .vertical-line {
      width: 0;
      height: 2rem;
      border: 0.05rem solid rgb(207, 207, 207);
    }
    .location {
      width: 24rem;

      .arrow-up {
        transform: rotate(-180deg);
        transition: transform 0.2s ease;
      }

      .arrow-down {
        transform: rotate(0deg);
        transition: transform 0.2s ease;
      }
    }

    .search {
      width: 53rem;
    }
  }
`

const InputCustom = styled(Input)`
  border: none;
  background: ${COLORS.white};
  padding: 0.6rem 0;
  margin: 0 1rem 0 0rem;

  font-size: 1.6rem;
  box-sizing: inherit;
  width: 100%;
`
const DetectLocation = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;

  width: 36rem;
  max-height: 108.36px;
  border-radius: 0.8rem;
  overflow: hidden;
  .detect {
    background: ${COLORS.white};
    cursor: pointer;
    box-shadow: rgb(232 232 232) 0px -0.5px 0px inset;
    padding: 1.8rem 1.8rem 1.8rem 1.5rem;
    z-index: 10;
    .detect__location {
      display: flex;
      align-items:center;

      .my-location-icon {
        padding: 0 0.8rem 0 0;
      }
    }
    p {
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
      color: ${COLORS.red};
    }

    span {
      font-size: 1.3rem;
      line-height: 1.5;
      margin-left:2.3rem;
    }
    &:hover {
      background: rgb(248, 248, 248);
    }
  }
`
function SearchLocation({ }) {
  const [toggleDownIcon, setToggleDownIcon] = React.useState(false)

  return (
    <Container>
      <div className="wrapper">
        <div className="location">
          <IconContext.Provider value={{ size: '3rem', color: COLORS.red }}>
            <MdLocationPin className="location-icon" />
          </IconContext.Provider>
          <InputCustom
            className="location-input"
            placeholder={
              'Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi'
            }
          />
          <IconContext.Provider value={{ size: '4rem', color: COLORS.red }}>
            <MdArrowDropDown
              className={toggleDownIcon ? 'arrow-up' : 'arrow-down'}
              onClick={() => setToggleDownIcon(!toggleDownIcon)}
            />
          </IconContext.Provider>
          <DetectLocation>
            <div className="detect">
              <div className='detect__location'>
                <IconContext.Provider value={{ size: '1.5rem', color: COLORS.red }}>
                  <MdMyLocation className="my-location-icon" />
                </IconContext.Provider>
                <p>Detect current location</p>
              </div>
              <span>Using GPS</span>
            </div>
          </DetectLocation>
        </div>
        <div className="vertical-line"></div>
        <div className="search">
          <IconContext.Provider value={{ size: '3rem', color: COLORS.red }}>
            <MdOutlineSearch className="search-icon" />
          </IconContext.Provider>
          <InputCustom
            className="search-input"
            placeholder={'Search for restaurant, cuisine or a dish'}
          />
        </div>
      </div>
    </Container>
  )
}

export default SearchLocation
