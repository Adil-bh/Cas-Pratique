import Select from 'react-select'
import styled from 'styled-components';

export const InputSelect = ({ label, placeholder, optionValues }) => {
    return (
        <InputSelectStyled>
            <p>{label}</p>
            <Select
                options={optionValues}
                placeholder={placeholder} />
        </InputSelectStyled>
    )
}

const InputSelectStyled = styled.div`
    p {
        margin: 0 0 4px 0;
        font-size: 14px;
        font-weight: 600;
    }

    [class$="-control"] {
        min-width: 250px;
        height: 60px;
        border-color: #000;
    }
    
    [class$="-ValueContainer2"] {
        padding-left: 10px;
    }
    
    [class$="-indicatorSeparator"] {
        display: none;
    }
    
    [class$="-placeholder"] {
        font-family: "Josefin Sans", sans-serif;
        color: rgba(0,0,0,.5);
    }

    [class$="-indicatorContainer"] {
        color: rgba(0,0,0,.5);
    }
`;