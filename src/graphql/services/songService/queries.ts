import { gql } from '@apollo/client';

export const SONGS_LIST = gql`
  query songsList($search: String!, $sort: String!) {
    songs(search: $search, sort: { key: $sort, order: ASC }) {
      songs {
        id
        name
        author {
          name
        }
        description
        genre
        image
        audio {
          url
        }
      }
    }
  }
`;
