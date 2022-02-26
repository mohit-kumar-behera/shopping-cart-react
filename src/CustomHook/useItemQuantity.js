import { useState, useEffect } from 'react';

const useItemQuantity = (item, cb) => {
  const [count, setCount] = useState(item.qty);

  useEffect(() => {
    cb(item.id, count);
  }, [count, item.id]);

  return [count, setCount];
};

export default useItemQuantity;
