import React from 'react'
import styled from 'styled-components'

const Conttainer = styled.div`
  display: flex;

  .main-image {
    width: 8rem;
    height: 8rem;

  }

  .info {
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 1.6rem;
      margin: 0;
      line-height: 2;
    }
  }

`

function SearchDropdownItem({ data }) {
  return (
    <Conttainer>
      <div className="main-image">
        <img src={data.image} />
      </div>
      <div className="info">
        <h5>Alel</h5>
      </div>
    </Conttainer>
  )
}

export default SearchDropdownItem
