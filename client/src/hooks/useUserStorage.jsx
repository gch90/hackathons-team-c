export const getUserValue = (key) => {
  const userKey = 'user_' + key;
  // getting stored value
  const saved = localStorage.getItem(userKey);
  const initial = JSON.parse(saved);
  return initial;
}

export const updateUserValue = (key, value) => {
  const userKey = 'user_' + key;
  localStorage.setItem(userKey, JSON.stringify(value));
}
