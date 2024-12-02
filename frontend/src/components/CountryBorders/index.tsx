import * as S from "./styles";

export type CountryBorderDataProps = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
};

type CountryBordersProps = {
  border: CountryBorderDataProps;
};

const CountryBorders = ({ border }: CountryBordersProps) => (
  <S.Wrapper>
    <S.BordersInfoWrapper>
      <S.CountryLink
        href={`/country/${border.commonName}/${border.countryCode}`}
      >
        {border.commonName}
      </S.CountryLink>

      <div>
        <p>Region: {border.region}</p>
        <p>Official Name: {border.officialName}</p>
      </div>
    </S.BordersInfoWrapper>
  </S.Wrapper>
);

export default CountryBorders;
