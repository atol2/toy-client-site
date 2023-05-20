export const generateSlugFromTitle = (title) => {
  return title.toLowerCase().replace(/\?/g, "").split(" ").join("-");
};