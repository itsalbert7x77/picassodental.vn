export default {
  routes: [
    { method: 'GET', path: '/categorys', handler: 'category.find' },
    { method: 'GET', path: '/categorys/:id', handler: 'category.findOne' },
    { method: 'POST', path: '/categorys', handler: 'category.create' },
    { method: 'PUT', path: '/categorys/:id', handler: 'category.update' },
    { method: 'DELETE', path: '/categorys/:id', handler: 'category.delete' },
  ],
};
