import Select from 'react-select'
import './CitySelectionForm.css'
import magnifyingGlass from '../../assets/images/magnifying-glass.svg'
import { customStyles, customStyles2, customTheme } from '../../styles.js'
import PropTypes from 'prop-types'

const CitySelectionForm = ( { 
  handleSearch, 
  selectedCity, 
  handleSelectedCity,
  handleKeyDown,
  urbanAreaList, 
  setSearchError, 
  searchError 
  } ) => {
    
  return (
    <form className='select-search-container' role='search' id='city-search'>
        <button className='search-button' type='submit'>
          <img 
          alt='Blue magnifying glass search icon.' 
          src={magnifyingGlass} 
          onClick={handleSearch}
          className='search-icon'
          />
        </button>
        <Select 
          defaultValue={selectedCity}
          onChange={handleSelectedCity}
          onFocus={() => setSearchError(false)}
          options={urbanAreaList}
          className='select-menu'
          placeholder='Search or select a city'
          autoFocus
          blurInputOnSelect={false}
          styles={searchError ? customStyles2 : customStyles}
          theme={customTheme}
          onKeyDown={handleKeyDown}
          classNamePrefix='select'
          />
      </form>
  )
}

CitySelectionForm.propTypes = {
  setSearchError: PropTypes.func,
}

export default CitySelectionForm