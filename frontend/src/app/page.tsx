import CountriesPage from "@/pages/CountriesPage";

async function getDataFromApi() {
  const data = await fetch(`${process.env.API_URL}/countries`);

  return data.json();
}

export default async function Home() {
  const data = await getDataFromApi();
  console.log(data);
  return <CountriesPage countries={data} />;
}
