import InfoCard, { InfoCardProps } from "@/components/InfoCard";
import CountryBorders, {
  CountryBorderDataProps,
} from "@/components/CountryBorders";

import * as S from "./styles";

type CountriesInfoPageProps = {
  infoCardData: InfoCardProps;
  bordersInfo: CountryBorderDataProps[];
};

const CountriesInfoPage = ({
  infoCardData,
  bordersInfo,
}: CountriesInfoPageProps) => (
  <S.Wrapper>
    <InfoCard
      iso={infoCardData.iso}
      name={infoCardData.name}
      url={infoCardData.url}
    />

    <S.BordersWrapper>
      {bordersInfo.map((border) => (
        <CountryBorders key={border.countryCode} border={border} />
      ))}
    </S.BordersWrapper>
  </S.Wrapper>
);

export default CountriesInfoPage;
