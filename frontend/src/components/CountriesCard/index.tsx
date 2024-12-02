import * as S from "./styles";

export type CountriesDataProps = {
  countryCode: string;
  name: string;
};

type CountriesCardProps = {
  data: CountriesDataProps[];
};

const CountriesCard = ({ data }: CountriesCardProps) => (
  <S.Wrapper>
    {data.map((country) => (
      <S.CountryLink
        href={`/country/${country.name}/${country.countryCode}`}
        key={country.countryCode}
      >
        {country.name}
      </S.CountryLink>
    ))}
  </S.Wrapper>
);

export default CountriesCard;
