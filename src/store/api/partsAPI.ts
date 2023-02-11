import { wapAPI } from "./wapAPI";

import { PartsList } from "./types/fetchedData";

const partsApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        listParts: build.query<PartsList[], void>({
            query: () => ({
                url: "part/list",
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const { useListPartsQuery } = partsApi;