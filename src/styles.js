import { css } from '@emotion/react'

export const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px solid #2E84FF',
    padding:'12px 12px',
  }),
  control: () => ({
    display: 'flex',
    width: '100%',
    dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#51707b',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor:'#50E2E6'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  }
}

export const customStyles2 = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px solid #2E84FF',
    padding:'12px 12px',
  }),
  control: () => ({
    display: 'flex',
    width: '100%',
    dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#cc0000',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export const customTheme = (theme) => {
  return {
    ...theme,
    borderRadius: '20px',
    colors: {
      ...theme.colors,
      primary25: '#7bb0fb',
      primary: '#50E2E6',
    }
  }
}

export const spinnerStyle = css`
  display: flex;
  justify-content: center;
  vertical-align: center;
  margin-top: 8rem;
  color: 'red';
`