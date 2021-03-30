import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);

  const data = {
    layout: 'layout.html',
    title: 'Not found',
  };

  res.format({
    html: () => {
      res.render('pages/error-page', data);
    },
    json: () => {
      res.json({ error: 'Not found' });
    },
    default: () => {
      res.type('txt').send('Not found');
    },
  });
}

interface ResponseError extends ErrorConstructor {
  status?: number;
}

export function errorHandler(
  error: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data = {
    layout: 'layout.html',
    title: 'Something went wrong',
    error,
  };

  res.status(error.status || 500);
  res.render('pages/error-page', data);
}
