import { useContext } from '@modern-js/runtime/server';
import { add } from 'utils'

export default async () => {
  const ctx = useContext();
  const { res } = ctx;
  res.append('x-id', '1');
  return {
    code: add(200, 5),
    message: 'Hello Modern.js',
  };
};
