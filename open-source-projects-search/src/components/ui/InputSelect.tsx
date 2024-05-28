import Select from 'react-select'
import styled from 'styled-components';

export const InputSelect = ({ label, placeholder, optionValues }) => {
    return (
        <InputSelectStyled>
            <p>{label}</p>
            <SelectStyled
                classNamePrefix={'Select'}
                options={optionValues}
                placeholder={placeholder}
            />
        </InputSelectStyled>
    )
}

const InputSelectStyled = styled.div`
    p {
        margin: 0 0 4px 0;
        font-size: 14px;
        font-weight: 600;
    }
`;

const SelectStyled = styled(Select)`
  .Select__control {
        min-width: 250px;
        height: 60px;
        border-color: #000;
    }
    
    .Select__control--is-focused,
    .Select__control--is-focused:hover {
        border-color: #000;
        box-shadow: none;
        border-width: 2px;
    }
    
    .Select__value-container {
        padding-left: 10px;
    }
    
    .Select__indicatorSeparator {
        display: none;
    }

    .Select__placeholder,
    .Select__menu,
    .Select__single-value,
    .Select__input {
        font-family: "Josefin Sans", sans-serif;
        font-size: 20px;
    }
    
    .Select__placeholder,
    .Select__value-indicator-container {
        color: rgba(0,0,0,.5);
    }

    .Select__input-container,
    .Select__placeholder {
        outline: none;
    }

    .Select__menu {
        top: 82%;
        border-radius: 0 0 5px 5px;
        box-shadow: none;
        border: solid 2px #000;
    }
`;