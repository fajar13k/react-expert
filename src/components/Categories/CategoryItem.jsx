import React from 'react';
import PropTypes from 'prop-types';

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

const CategoryItem = ({ category, selectedCategory, onSelectCategory }) => {
  const getFilterActive = () => {
    return selectedCategory !== category ? 'bg-gray-200 dark:bg-gray-500' : 'bg-amber-500 font-semibold';
  };

  return (
    <button className={`px-4 py-2 rounded-xl ${getFilterActive()}`} type="button" onClick={() => onSelectCategory(category)}>
      {category}
    </button>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default CategoryItem;
