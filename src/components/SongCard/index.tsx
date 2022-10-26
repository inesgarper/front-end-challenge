import { SongsCardProps } from './types';

export const SongCard = ({ name, image, author, genre }: SongsCardProps) => (
  <div>
    <img src={image}></img>
    <div className="songInfo">
      <h5>{name}</h5>
      <h5>{author.name}</h5>
      <h5>{genre}</h5>
    </div>
    <button className="favButton">Like</button>
  </div>
);
