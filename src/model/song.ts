export type Song = {
  id: number;
  name: string;
  author: {
    name: string;
  };
  description: string;
  genre: string;
  image: string;
  audio: {
    url: string;
  };
};
