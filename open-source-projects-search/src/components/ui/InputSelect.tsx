import Select from 'react-select'

export const InputSelect = ({ label, optionValues }) => {
    return (
        <div>
            <p>{label}</p>
            <Select options={optionValues} />
        </div>
    )
}