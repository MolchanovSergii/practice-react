import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchSearch } from 'hooks/useFetchSearch';

export const CountrySearch = () => {
  const {countries, isLoading, error, handleChange} = useFetchSearch();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleChange}/>
        {isLoading && <Loader />}
        {error && <Heading>No country found</Heading>}
        <CountryList countries={countries}/>

      </Container>
    </Section>
  );
};
