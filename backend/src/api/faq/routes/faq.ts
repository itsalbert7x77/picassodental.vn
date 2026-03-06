export default {
  routes: [
    { method: 'GET', path: '/faqs', handler: 'faq.find' },
    { method: 'GET', path: '/faqs/:id', handler: 'faq.findOne' },
    { method: 'POST', path: '/faqs', handler: 'faq.create' },
    { method: 'PUT', path: '/faqs/:id', handler: 'faq.update' },
    { method: 'DELETE', path: '/faqs/:id', handler: 'faq.delete' },
  ],
};
