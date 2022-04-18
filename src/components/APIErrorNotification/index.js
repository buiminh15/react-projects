import useAPIError from '../../hooks/useAPIError';
import styled from 'styled-components'
import { COLORS } from '../../utils/constants';
import { MdClose } from "react-icons/md";
import { IconContext } from 'react-icons'
import { useEffect } from 'react';

const Container = styled.div`
  height: auto;
  width: 50%;
  padding: 0rem 2rem;

  font-size: 1.8rem;
  letter-spacing: 0.1rem;

  z-index: 20;
  background: ${COLORS.pink};
  color: red;
  border-radius: 0.8rem;

  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

`
function APIErrorNotification() {
  const { error, removeError } = useAPIError();

  useEffect(() => {
    let timer = setTimeout(() => removeError(), 4000);
    return () => {
      clearTimeout(timer);
    }
  }, [error])

  return (
    <>
      {
        error && error.message &&
        <Container>
          <p>{error.message}</p>
          <IconContext.Provider value={{ size: '2rem', color: COLORS.red }} >
            <MdClose onClick={removeError} />
          </IconContext.Provider>
        </Container>
      }
    </>
  )
}

export default APIErrorNotification
