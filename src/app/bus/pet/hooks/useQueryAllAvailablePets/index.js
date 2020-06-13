// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.gql');

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAllAvailablePets);

  return { getAllAvailablePets, loading, error, pets: data && data.allAvailablePets }
};