export const typeBooks = {
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  gender: { type: String, required: true },
  pages: { type: Number, required: true },
};
