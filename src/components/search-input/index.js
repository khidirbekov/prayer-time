import React, { useState } from 'react'
import SearchImg from '../../assets/images/search.svg'
import { isExist } from '../../helpers/general'
import Preloader from '../preloader'
import './style.css'

const SearchInput = React.memo(
  ({
    options,
    optionsValueKey = 'value',
    onSelect,
    placeholder = '',
    onChange
  }) => {
    const [isLoadedOptions, setIsLoadedOptions] = useState(false)
    const [loading, setLoading] = useState(false)
    const textInput = React.createRef()
    const setValue = value => {
      textInput.current.value = value
      setIsLoadedOptions(false)
      onSelect(value)
    }

    const setupPreloader = async event => {
      const query = event.target.value
      setLoading(true)
      await onChange(query)
      setLoading(false)
    }

    const showResults = () => {
      if (isExist(options)) {
        return options.map(city => {
          return (
            <li
              key={city[optionsValueKey]}
              onClick={() => setValue(city[optionsValueKey])}
              className="search__result"
            >
              {city[optionsValueKey]}
            </li>
          )
        })
      }
      return null
    }

    const closeOptionsAfterSelectOrBlur = () => {
      setTimeout(() => setIsLoadedOptions(false), 300)
    }

    return (
      <div className="search">
        <div className="search__content">
          <input
            ref={textInput}
            placeholder={placeholder}
            onFocus={() => setIsLoadedOptions(true)}
            onBlur={() => closeOptionsAfterSelectOrBlur()}
            type="text"
            className="search__input"
            onChange={event => setupPreloader(event)}
          />
          <label className="search__label">
            <img src={SearchImg} alt="search" />
          </label>
        </div>
        {loading && <Preloader className="search__loading" size={15} />}
        {isLoadedOptions && (
          <div className="search__result__wrapper">{showResults()}</div>
        )}
      </div>
    )
  }
)

export default SearchInput
