export const generateSlugFromTitle = (title) => {
  return title.toLowerCase().split(" ").join("-");
};