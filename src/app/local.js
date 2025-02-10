



export const setBlogsToLocalStorage = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}

export const getBlogsFromLocalStorage = () => {
  const blogs = localStorage.getItem('blogs');
  return blogs ? JSON.parse(blogs) : [];
}