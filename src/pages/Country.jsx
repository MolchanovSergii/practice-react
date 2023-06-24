import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
export const Country = () => {
  const location = useLocation();
  const { country, isLoading, error } = useFetchCountry();

  const { flag, capital, countryName, id, languages, population } =
    country || {};
    
    const goBackLink = location?.state?.from ?? routes.HOME;
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <div>Error!!!</div>}
      <GoBackBtn path={goBackLink}>Go Back</GoBackBtn>
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
