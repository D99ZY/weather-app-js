import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Search = forwardRef((props, ref) => {
  const { handleSearch } = props;
  return (
    <div className="search">
      <input
        placeholder="Enter City"
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(e.target.value);
          }
        }}
      />
    </div>
  );
});

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
