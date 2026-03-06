export default {
  routes: [
    { method: 'GET', path: '/gallery-items', handler: 'gallery-item.find' },
    { method: 'GET', path: '/gallery-items/:id', handler: 'gallery-item.findOne' },
    { method: 'POST', path: '/gallery-items', handler: 'gallery-item.create' },
    { method: 'PUT', path: '/gallery-items/:id', handler: 'gallery-item.update' },
    { method: 'DELETE', path: '/gallery-items/:id', handler: 'gallery-item.delete' },
  ],
};
