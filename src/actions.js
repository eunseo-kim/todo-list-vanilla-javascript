export function setId(id) {
  return {
    type: 'setId',
    payload: { id },
  };
}

export function setItems(items) {
  return {
    type: 'setItems',
    payload: { items },
  };
}
