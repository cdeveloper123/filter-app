// components/Filters.js
import React from 'react';
import FilterCheckbox from './FilterCheckbox.js';

const Filters = ({
  filters,
  handleFilterChange,
  handleResetFilters,
  counts
}) => {
  return (
    <div>
      <h4>Filters</h4>
      <button className="btn btn-secondary mb-3" onClick={handleResetFilters}>
        Reset
      </button>
      <div className="mb-3">
        <h5>Public</h5>
        <FilterCheckbox
          label="true"
          checked={filters.public.includes(true)}
          onChange={() => handleFilterChange('public', true)}
          // count={counts.public.true}
        />
        <FilterCheckbox
          label="false"
          checked={filters.public.includes(false)}
          onChange={() => handleFilterChange('public', false)}
          count={counts.public.false}
        />
      </div>
      <div className="mb-3">
        <h5>Active</h5>
        <FilterCheckbox
          label="true"
          checked={filters.active.includes(true)}
          onChange={() => handleFilterChange('active', true)}
          count={counts.active.true}
        />
        <FilterCheckbox
          label="false"
          checked={filters.active.includes(false)}
          onChange={() => handleFilterChange('active', false)}
          count={counts.active.false}
        />
      </div>
      <div className="mb-3">
        <h5>Regions</h5>
        {['HS', 'MS', 'ES'].map((region) => (
          <FilterCheckbox
            key={region}
            label={region}
            checked={filters.regions.includes(region)}
            onChange={() => handleFilterChange('regions', region)}
            count={counts.regions[region]}
          />
        ))}
      </div>
      <div className="mb-3">
        <h5>Tags</h5>
        {['math', 'literature', 'science'].map((tag) => (
          <FilterCheckbox
            key={tag}
            label={tag}
            checked={filters.tags.includes(tag)}
            onChange={() => handleFilterChange('tags', tag)}
            count={counts.tags[tag]}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
