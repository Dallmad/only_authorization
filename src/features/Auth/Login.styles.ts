import styled, {css} from 'styled-components'

const fontStylesField = css`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1F1F1F;
`
const sizeFieldsStyles = css`
  width: 100%;
  height: 60px;
`

export const LoginWrapper = styled.div`
  min-width: 640px;
  min-height: 338px;

  h4 {
    ${fontStylesField};
    margin: 20px 0 10px 0;
  }

  p {
    margin: 8px 0 20px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E26F6F;
  }

  label {
    ${fontStylesField};
    margin-left: 17px;
  }

  button {
    ${sizeFieldsStyles};
    background: #4A67FF;
    border-radius: 8px;
    border: none;
    margin-top: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    cursor: pointer;

    :disabled {
      background: #99A9FF;
      cursor: auto;
    }
  }
`

export const StyledInput = styled.input<{ error: boolean }>`
  ${sizeFieldsStyles};
  background: #F5F5F5;
  border-radius: 8px;
  border: ${({error}) => error ? '1px solid #E26F6F' : 'none'};
  ${fontStylesField};
  color: #232323;

  :focus {
    outline: none;
  }
}
`

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 25px;

  :checked {
    background-color: green;
  }

  :checked:before {
    content: '\2713';
    color: white;
    padding: initial;
    font-weight: bold;
  }
`

export const StyledErrorButton = styled.div`
  ${sizeFieldsStyles};
  background: #F5E9E9;
  border-radius: 8px;
  border: 1px solid #E26F6F;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 27px;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    width: 20px;
    height: 20px;
    background: #FFC8C8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #EE6565;
    margin-right: 14px;
  }
`