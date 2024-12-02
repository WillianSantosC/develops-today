import * as S from "./styles";

export type FlagDataProps = {
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  };
};

export type InfoCardProps = {
  iso: string;
  name: string;
  url: string;
};

const InfoCard = ({ iso, name, url }: InfoCardProps) => (
  <S.Wrapper>
    <S.InfoWrapper>
      <h1>{name}</h1>
      <p>Country Code: {iso}</p>
    </S.InfoWrapper>
    <img src={url} alt={name} />
  </S.Wrapper>
);

export default InfoCard;
