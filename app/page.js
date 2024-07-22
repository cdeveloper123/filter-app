"use client"
import { useState, useEffect } from 'react';
import { data as products } from '../data/dataset';
import Filters from './components/Filters.js';
import ProductTable from './components/ProductTable';

const HomePage = () => {
  const [filters, setFilters] = useState({
    public: [],
    active: [],
    regions: [],
    tags: [],
  });

  const [counts, setCounts] = useState({
    public: { true: 0, false: 0 },
    active: { true: 0, false: 0 },
    regions: { HS: 0, MS: 0, ES: 0 },
    tags: { math: 0, literature: 0, science: 0 },
  });

  useEffect(() => {
    const newCounts = {
      public: { true: 0, false: 0 },
      active: { true: 0, false: 0 },
      regions: { HS: 0, MS: 0, ES: 0 },
      tags: { math: 0, literature: 0, science: 0 },
    };

    products.forEach((product) => {
      newCounts.public[product.public] += 1;
      newCounts.active[product.active] += 1;
      product.regions.forEach((region) => {
        newCounts.regions[region] += 1;
      });
      product.tags.forEach((tag) => {
        newCounts.tags[tag] += 1;
      });
    });

    setCounts(newCounts);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      public: [],
      active: [],
      regions: [],
      tags: [],
    });
  };

  const generateSearchText = () => {
    const filterEntries = Object.entries(filters)
      .filter(([, values]) => values.length > 0)
      .map(
        ([key, values]) =>
          `${key}:${values.map((value) => (typeof value === 'boolean' ? value : value)).join(',')}`
      );
    return filterEntries.join(' ');
  };

  const filteredProducts = products.filter((product) => {
    const publicMatch =
      filters.public.length === 0 || filters.public.includes(product.public);
    const activeMatch =
      filters.active.length === 0 || filters.active.includes(product.active);
    const regionsMatch =
      filters.regions.length === 0 ||
      product.regions.some((region) => filters.regions.includes(region));
    const tagsMatch =
      filters.tags.length === 0 ||
      product.tags.some((tag) => filters.tags.includes(tag));

    return publicMatch && activeMatch && regionsMatch && tagsMatch;
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <Filters
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleResetFilters={handleResetFilters}
            counts={counts}
          />
        </div>
        <div className="col-md-9">
          <h4>Products</h4>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search..."
            value={generateSearchText()}
            readOnly
          />
          <ProductTable products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
