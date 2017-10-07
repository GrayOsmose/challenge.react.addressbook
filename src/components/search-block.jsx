import React from 'react';

import { FormControl } from 'react-bootstrap';

const SearchBlock = ({ onSearch }) => {
  let searchInput;

  return (
    <div>
      <FormControl
        inputRef={ref => searchInput = ref}
        placeholder="Search"
        onChange={() => onSearch(searchInput.value)}
      />
    </div>
  );
};

export default SearchBlock;
