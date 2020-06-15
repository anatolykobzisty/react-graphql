// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.gql');

export const useQueryAvailablePets = () => {
  return useQuery(queryAvailablePets, {
    // pollInterval: 500,
  });
};