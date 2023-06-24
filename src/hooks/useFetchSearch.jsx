import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchSearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    
    const region = searchParams.get('query');
    if(!region) {
        return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedCountries = await fetchByRegion(region);
        setCountries(fetchedCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);
const handleChange = (query) => {setSearchParams({query})}
  return { countries, isLoading, error, handleChange };
};
