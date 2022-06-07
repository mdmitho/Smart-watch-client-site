import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Hooks/Loading';
import AllWatch from './AllWatch/AllWatch';

const LetestProduct = () => {

  const {
    data: watchs,
    isLoading,
    refetch,
  } = useQuery(["watch"], () =>
    fetch("http://localhost:5000/watch").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

console.log(watchs);

    return (
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold mt-3 text-accent">Customer Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {watchs.map((watch) => (
            <AllWatch key={watch._id} watch={watch}></AllWatch>
          ))}
        </div>
      </div>
    );
};

export default LetestProduct;