"use client";

import { useState } from "react";

import * as S from "./styles";

export type CountriesDataProps = {
  countryCode: string;
  name: string;
};

type CountriesCardProps = {
  data: CountriesDataProps[];
};

const CountriesCard = ({ data }: CountriesCardProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(data);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);

    if (searchValue) {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredCountries(filteredData);
    } else {
      setFilteredCountries(data);
    }
  };

  return (
    <S.Wrapper>
      <S.Label className="Label" htmlFor="search">
        Search Country
      </S.Label>
      <S.InputWrapper className="InputWrapper">
        <S.Input
          id="search"
          className="Input"
          type="text"
          placeholder="Search Country"
          onChange={handleSearch}
          value={searchValue}
        />
      </S.InputWrapper>
      {filteredCountries.map((country) => (
        <S.CountryLink
          href={`/country/${country.name}/${country.countryCode}`}
          key={country.countryCode}
        >
          {country.name}
        </S.CountryLink>
      ))}
    </S.Wrapper>
  );
};

export default CountriesCard;
