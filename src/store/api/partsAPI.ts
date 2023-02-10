import { wapAPI } from "./wapAPI";

import { PartsList } from "./types/fetchedData";

const partsApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        listParts: build.query<PartsList[], void>({
            query: () => ({
                url: "parts/list",
                method: 'GET',
            }),
        }),
    }),
});
  
export const { useListPartsQuery } = partsApi;