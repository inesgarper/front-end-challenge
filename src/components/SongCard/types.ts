export type SongsCardProps = {
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
