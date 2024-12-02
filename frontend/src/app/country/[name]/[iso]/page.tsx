import CountriesInfoPage from "@/pages/CountriesInfoPage";
import { CountriesDataProps } from "@/components/CountriesCard";
import { FlagDataProps } from "@/components/InfoCard";

type ParamsProps = {
  params: {
    name: string;
    iso: string;
  };
};

async function getCountryBorders(params: { iso: string }) {
  const countryBorders = await fetch(
    `${process.env.API_URL}/country/${params.iso}`,
    {
      method: "POST",
    },
  );

  return countryBorders.json();
}

async function getCountryFlag(params: { iso: string }) {
  const countryFlag = await fetch(
    `${process.env.API_URL}/country/${params.iso}/flag`,
  );

  return countryFlag.json();
}

// async function getCountryHistoricalPopulation(params: { name: string }) {
//   const countryHistoricalPopulation = await fetch(
//     `${process.env.API_URL}/country/${params.name}`,
//   );

//   return countryHistoricalPopulation.json();
// }

export const dynamicParams = false;
export async function generateStaticParams() {
  const countries: CountriesDataProps[] = await fetch(
    `${process.env.API_URL}/countries`,
  ).then((res) => res.json());

  return countries.map((country) => ({
    name: country.name,
    iso: country.countryCode,
  }));
}

export default async function InfoPage({ params }: ParamsProps) {
  const borders = await getCountryBorders(params);
  const flag: FlagDataProps = await getCountryFlag(params);
  // const population = await getCountryHistoricalPopulation(params);

  const infoCard = {
    name: params.name,
    iso: params.iso,
    url: flag.data.flag,
  };

  return (
    <CountriesInfoPage bordersInfo={borders.borders} infoCardData={infoCard} />
  );
}
