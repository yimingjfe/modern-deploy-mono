import { Middleware } from '@modern-js/runtime/server';
import { add } from 'utils'

export const middleware: Middleware = (context, next) => {
  const {
    source: { req, res },
  } = context;
  console.log('custom middleware', add(8, 9));
  next();
};