// In JavaScript, you don't need to define types, so we simply remove the type annotations.

export const Post = {
  slug: "",
  title: "",
  date: "",
  coverImage: "",
  author: null, // Assuming `author` is an object; initialize as null or an empty object if necessary
  excerpt: "",
  ogImage: {
    url: "",
  },
  content: "",
  preview: false, // Optional properties can have a default value, like `false` for boolean
};
