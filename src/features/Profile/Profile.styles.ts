import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  //min-height: 100vh;
  
  label {
    font-weight: 600;
  }

  button {
    width: 200px;
    height: 60px;
    background: #F5F5F5;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-top: 50px;
    border: none;
  }
`