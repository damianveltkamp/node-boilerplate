import { Request, Response } from 'express';

export function home(req: Request, res: Response) {
  const data = {
    layout: 'layout.html',
    title: 'Home page',
  };

  const error = new Error();
  error.message = 'something went wrong';

  res.render('pages/home.html', data);
}
