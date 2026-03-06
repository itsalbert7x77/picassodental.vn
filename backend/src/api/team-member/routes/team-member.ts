export default {
  routes: [
    { method: 'GET', path: '/team-members', handler: 'team-member.find' },
    { method: 'GET', path: '/team-members/:id', handler: 'team-member.findOne' },
    { method: 'POST', path: '/team-members', handler: 'team-member.create' },
    { method: 'PUT', path: '/team-members/:id', handler: 'team-member.update' },
    { method: 'DELETE', path: '/team-members/:id', handler: 'team-member.delete' },
  ],
};
