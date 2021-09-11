import('./bootstrap')
  .then(bootstrap => bootstrap.default('root'))
  .catch((err) => console.error(err));
