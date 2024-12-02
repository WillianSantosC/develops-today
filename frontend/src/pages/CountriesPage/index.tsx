import CountriesCard, { CountriesDataProps } from "@/components/CountriesCard";

import * as S from "./styles";

type CountriesPageProps = {
  countries: CountriesDataProps[];
};

const CountriesPage = ({ countries }: CountriesPageProps) => (
  <S.Wrapper>
    <CountriesCard data={countries} />
  </S.Wrapper>
);

export default CountriesPage;
