export const fetchPortfolio = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${id}/portfolio`
    })
  )
};

export const addItem = (id, item) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${id}/portfolio`,
    data: { item }
  })
);

export const removeItem = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/portfolio/${id}`
  })
);