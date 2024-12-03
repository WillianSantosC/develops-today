import InfoCard, { InfoCardProps } from "@/components/InfoCard";
import CountryBorders, {
  CountryBorderDataProps,
} from "@/components/CountryBorders";
import BarChart, { BarChartDataProps } from "@/components/BarChart";

import * as S from "./styles";

type CountriesInfoPageProps = {
  infoCardData: InfoCardProps;
  bordersInfo: CountryBorderDataProps[];
  chartData: BarChartDataProps[];
};

const CountriesInfoPage = ({
  infoCardData,
  bordersInfo,
  chartData,
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

    <BarChart population={chartData} />
  </S.Wrapper>
);

export default CountriesInfoPage;
