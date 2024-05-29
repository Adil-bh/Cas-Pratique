import Select from 'react-select'
import styled from 'styled-components';

type InputSelectProps = {
    label: string,
    placeholder: string,
    optionValues: selectOptions[],
    isMulti: boolean
}

type selectOptions = {
    value: string;
    label: string;
}

export const InputSelect = ({ label, placeholder, optionValues, isMulti }: InputSelectProps) => {
    return (
        <InputSelectStyled>
            <p>{label}</p>
            <SelectStyled
                classNamePrefix={'Select'}
                options={optionValues}
                placeholder={placeholder}
                isMulti={isMulti}
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
        width: 250px;
        min-height: 60px;
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
    .Select__input,
    .Select__multi-value__label {
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

    .Select__placeholder {
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
    }

    .Select__menu {
        top: 82%;
        border-radius: 0 0 5px 5px;
        box-shadow: none;
        border: solid 2px #000;
    }
    
    .Select__multi-value__label {
        background: #FFF;
        padding: 4px 6px 2px;
        border: solid 1px #000;
        border-right: none;
        border-radius: 3px 0 0 3px;
    }

    .Select__multi-value__remove {
        background: #FFF;
        border: solid 1px #000;
        border-left: none;
        border-radius: 0 3px 3px 0;

        &:hover {
            background: #FFBDAD;
        }
    }
`;