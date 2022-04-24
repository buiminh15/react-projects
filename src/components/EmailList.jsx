import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 51.1rem;
  width: 100%;

  background: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-email-list {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 52px;
    margin: 0;

    color: #000033;
  }
  .desc-email-list {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;

    width: 410px;

    color: rgba(0, 0, 51, 0.95);
  }
`;

const Submit = styled.form`
  width: 713px;
  height: 53.35px;

  display: flex;

  .submit__input {
    height: 53px;
    width: 531px;

    box-sizing: border-box;
    border-radius: 22.66666603088379px;
    border: none;
    background: #f2f1f1;

    font-weight: 300;
    font-size: 13px;
    line-height: 26px;

    padding: 1.3rem 3.6rem;
    margin-right: 2.5rem;

    color: rgba(107, 114, 128, 0.9);

  }

  .submit__button {
    padding: 13.676px 20.514px;

    width: 157px;
    height: 53.35px;

    background: #029837;
    border-radius: 20px;
    border: none;

    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }
`;

function EmailList() {
  return (
    <Container>
      <h2 className="title-email-list">Subscribe to our newsletter</h2>
      <p className="desc-email-list">
        We recommend you to subscribe to our newsletter , drop your email below
        to get daily update about us
      </p>

      <Submit>
        <input
          placeholder="Enter your email address"
          type="text"
          className="submit__input"
        />
        <button type="submit" className="submit__button">
          Subscribe
        </button>
      </Submit>
    </Container>
  );
}

export default EmailList;
