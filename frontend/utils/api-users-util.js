// export const createUser = (user) => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/users',
//     data: {user}
//   })
// );

export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user}
  })
);

export const deleteUser = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${id}`
  })
);