import React from 'react';
import { useDispatch } from 'react-redux';

import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/Tnreads/ThreadInput';

const CreateThread = () => {
  const dispatch = useDispatch();

  const onThreadInput = async (title, body, category) => {
    await dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <section id="create-thread">
      <ThreadInput threadInput={onThreadInput} />
    </section>
  );
};

export default CreateThread;
