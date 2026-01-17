// src/containers/Admin/NewProduct/selectStyles.js
import { standardTheme } from '../../../styles/themes/standard';

export const selectStatusStyles = {
    control: (base, state) => ({
        ...base,
        minHeight: 36,
        borderRadius: 6,
        borderColor: state.isFocused ? standardTheme.purple : '#ccc',
        boxShadow: state.isFocused ? `0 0 0 1px ${standardTheme.purple}` : 'none',
        '&:hover': { borderColor: standardTheme.purple },
        backgroundColor: standardTheme.mainBlack,
        color: standardTheme.white,
        fontSize: 14,
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: standardTheme.mainBlack,
        color: standardTheme.white,
        zIndex: 9999,
        borderRadius: 6,
        padding: 4,
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? standardTheme.purple
            : state.isFocused
                ? '#4b2a5f'
                : standardTheme.mainBlack,
        color: standardTheme.white,
        cursor: 'pointer',
        padding: '8px 12px',
        fontSize: 14,
        transition: 'background-color 0.2s',
    }),
    singleValue: (base) => ({ ...base, color: standardTheme.white }),
    placeholder: (base) => ({ ...base, color: standardTheme.lightGray }),
    dropdownIndicator: (base) => ({
        ...base,
        color: standardTheme.white,
        '&:hover': { color: standardTheme.purple },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
};
