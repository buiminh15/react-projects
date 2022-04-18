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

function SearchDropdownItem({ data, loading }) {
  return (
    <Conttainer>
      <div className="main-image">
        <img src={data.image} />
      </div>
      <div className="info">
        <h5>Alel</h5>
        <p className='address'>Address, India</p>
        {
          data.orderStatus ? <p className='order-status'>Address, India</p> :
            <p className="not-order">Currently not accepting orders</p>
        }


        {
          data.deliveryTime ? <p className='delivery-time'>Delivery in 33 min</p> :
            <p className="not-delivery">Does not delivery to your location</p>
        }

      </div>
    </Conttainer>
  )
}

export default SearchDropdownItem
