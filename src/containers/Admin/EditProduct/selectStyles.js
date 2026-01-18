import { standardTheme } from '../../../styles/themes/standard';

export const selectStatusStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 44,
    borderRadius: 6,
    borderColor: state.isFocused ? standardTheme.accentOrange : '#555',
    boxShadow: state.isFocused ? `0 0 0 2px ${standardTheme.accentOrange}` : 'none',
    backgroundColor: standardTheme.mainBlack,
    color: standardTheme.white,
    fontSize: 14,
    cursor: 'pointer',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: standardTheme.mainBlack,
    color: standardTheme.white,
    borderRadius: 6,
    padding: 4,
    overflow: 'visible', // permite que todos os itens fiquem visíveis
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
    width: 'max-content', // largura mínima para caber os itens
    minWidth: '100%',     // opcional, garante que seja pelo menos a largura do select
    overflow: 'visible',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? standardTheme.accentOrange
      : state.isFocused
        ? '#4b2a5f'
        : standardTheme.mainBlack,
    color: standardTheme.white,
    cursor: 'pointer',
    padding: '8px 12px',
    fontSize: 14,
    whiteSpace: 'nowrap', // evita quebra de linha e rolagem horizontal
    '&:active': { backgroundColor: standardTheme.accentOrange },
  }),
  singleValue: (base) => ({
    ...base,
    color: standardTheme.white,
  }),
  placeholder: (base) => ({
    ...base,
    color: standardTheme.lightGray,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: standardTheme.white,
    '&:hover': { color: standardTheme.accentOrange },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};
