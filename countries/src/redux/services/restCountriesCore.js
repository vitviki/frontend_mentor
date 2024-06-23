import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restCountriesAPI = createApi({
  reducerPath: "restCountriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => {
        return {
          url: "all",
        };
      },
    }),
    getSearchResults: builder.query({
      query: (country) => {
        return {
          url: `name/${country}`,
        };
      },
    }),
    getCountriesByRegion: builder.query({
      query: (region) => {
        return {
          url: `region/${region}`,
        };
      },
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetSearchResultsQuery,
  useGetCountriesByRegionQuery,
} = restCountriesAPI;
