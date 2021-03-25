export function notFound(req, res, next) {
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

export function errorHandler(error, req, res, next) {
  const data = {
    layout: 'layout.html',
    title: 'Something went wrong',
    error,
  };

  res.status(error.status || 500);
  res.render('pages/error-page', data);
}
