import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import CategoryItem, { threadItemShape } from './CategoryItem';

const CategoryList = ({ threads, selectedCategory, onSelectCategory }) => {
  const { t } = useTranslation();

  const getFilterState = () => {
    return selectedCategory !== 'all' ? 'cursor-pointer' : 'cursor-not-allowed';
  };

  return (
    <div id="category-list" className="p-4 rounded-xl border-4 my-4">
      <h1 className="text-xl font-bold mb-4">Filter</h1>
      <div className="flex gap-2 flex-wrap">
        {selectedCategory !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 bg-gray-200 rounded-xl ${getFilterState()}`}
          >
            Reset
          </button>
        )}
        {threads.length > 0 ? (
          threads.map((thread) => (
            <CategoryItem
              key={thread.id}
              {...thread}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          ))
        ) : (
          <p>{t('loading')}</p>
        )}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryList;
