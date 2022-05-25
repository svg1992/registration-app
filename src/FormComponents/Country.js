import React, { useState } from 'react'
import {countryList} from '../data/countriesList'
import './styles.css'

const Country = ({countryValue, SetFormData}) => {
    const [countryInfo, setCountryInfo] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,        
    })

    const onChange = e => {
        const suggestions = countryList;
        const userInput = e.target.value;
        SetFormData(prevState => ({
            ...prevState,
            [e.target.name] : userInput
        }))
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setCountryInfo({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
        });
      };

     const onClick = e => {
        setCountryInfo({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userSelection: e.target.innerText
        });
        SetFormData(prevState => ({
            ...prevState,
            country : e.target.innerText
        }))
      };

     const onBlur = e => {
        if (countryInfo.userSelection === "") {
            setCountryInfo({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
          });
          SetFormData(prevState => ({
            ...prevState,
            country : ''
        }))
        }
      };

      const onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = countryInfo;
    
        if (e.keyCode === 13) {
            setCountryInfo({
            activeSuggestion: 0,
            showSuggestions: false,
            userSelection: filteredSuggestions[activeSuggestion]
          });
          SetFormData(prevState => ({
            ...prevState,
            country :filteredSuggestions[activeSuggestion]
        }))
        }
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          setCountryInfo({ activeSuggestion: activeSuggestion - 1 });
        }
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          setCountryInfo({ activeSuggestion: activeSuggestion + 1 });
        }
      };

    const suggestionsListComponent = () => {
        const { showSuggestions, filteredSuggestions, activeSuggestion } = countryInfo;
        if (showSuggestions && countryValue) {
            if (filteredSuggestions.length) {
                return (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className="no-suggestions">
                        <p>No suggestions, you're on your own!</p>
                    </div>
                );
            }
        }
    }
    return (
        <div>
            <input
                type="text"
                name='country'
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={countryValue}
                onBlur={onBlur}
            />
            {suggestionsListComponent()}
        </div>
    )
}

export default Country;