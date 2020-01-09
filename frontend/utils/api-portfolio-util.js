export const fetchPortfolio = () => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${current_user.id}/portfolio`
  })
);

export const addItem = (item) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${current_user.id}/portfolio`,
    data: { item }
  })
);

export const removeItem = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/portfolio/${id}`
  })
);