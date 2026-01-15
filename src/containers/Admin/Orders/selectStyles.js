// styles/selectStyles.js
export const selectStatusStyles = {
    control: (base) => ({
        ...base,
        borderColor: '#ccc',
        boxShadow: 'none',
        '&:hover': { borderColor: '#999' },
        minHeight: 36,
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#fff',
        zIndex: 9999,
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? '#8a2be2'
            : state.isFocused
                ? '#f0e6ff'
                : '#fff',
        color: state.isSelected ? '#fff' : '#333',
        cursor: 'pointer',
    }),
    singleValue: (base) => ({
        ...base,
        color: '#333',
    }),
    placeholder: (base) => ({
        ...base,
        color: '#999',
    }),
};
