import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();

  const { flag, capital, countryName, id, languages, population } =
    country || {};
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <div>Error!!!</div>}

        {country && (
          <CountryInfo
            flag={flag}
            capital={capital}
            countryName={countryName}
            id={id}
            languages={languages}
            population={population}
          />
        )}
      </Container>
    </Section>
  );
};
