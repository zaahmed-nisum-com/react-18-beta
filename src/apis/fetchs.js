export const apis = {
  fetchToDos: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
    const res = await response.json();
    return res;
  },
  fetchTitles: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const res = await response.json();
    const names = res.map((_) => {
      return _.name;
    });
    return names;
  },
};
