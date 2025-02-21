import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ThreadList from '../components/Tnreads/ThreadList';
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralDownVoteThread,
  asyncToggleNeutralUpVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads/action';
import CategoryList from '../components/Categories/CategoryList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDislike = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
  };

  const onNeutralLike = (id) => {
    dispatch(asyncToggleNeutralUpVoteThread(id));
  };

  const onNeutralDislike = (id) => {
    dispatch(asyncToggleNeutralDownVoteThread(id));
  };

  // Get unique categories from threads
  const uniqueCategories = threads.filter(
    (thread, index) =>
      threads.findIndex((obj) => obj.category === thread.category) === index
  );

  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter threads based on selected category
  const threadList = threads
    .filter((thread) => {
      if (selectedCategory === 'all') {
        return true;
      }
      return thread.category === selectedCategory;
    })
    .map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
      authUser: authUser.id,
    }));

  return (
    <section id="home-page">
      <CategoryList
        threads={uniqueCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
        }}
      />
      <ThreadList
        threads={threadList}
        like={onLike}
        dislike={onDislike}
        neutralLike={onNeutralLike}
        neutralDislike={onNeutralDislike}
      />
    </section>
  );
};

export default HomePage;
