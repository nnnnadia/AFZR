import React from 'react';
import PropTypes from 'prop-types';
import DateContext from './DateContext';

function DateProvider({ children }) {
  const CONTEXT_VALUE = {};

  return (
    <DateContext.Provider value={ CONTEXT_VALUE }>
      { children }
    </DateContext.Provider>
  );
}

DateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
};

export default DateProvider;