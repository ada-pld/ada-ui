import { adaAPI } from "./adaAPI";

import { PartsList } from "./types/fetchedData";

const partsApi = adaAPI.injectEndpoints({
    endpoints: (build) => ({
        listParts: build.query<PartsList[], void>({
            query: () => ({
                url: "part/list",
                method: 'GET',
            }),
        }),
        createPart: build.mutation<void, string>({
            query: (name) => ({
                url: "part/create",
                method: 'POST',
                body: {
                    name: name
                }
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useListPartsQuery,
    useCreatePartMutation
} = partsApi;