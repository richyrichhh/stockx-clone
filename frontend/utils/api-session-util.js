export const register = user => (
  $.ajax({
    url: '/api/users',
    method: 'post',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    url: '/api/session',
    method: 'post',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'delete'
  })
);

export const check = () => (
  $.ajax({
    url: '/api/session',
    method: 'GET'
  })
);