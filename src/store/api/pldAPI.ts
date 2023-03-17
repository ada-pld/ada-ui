import { wapAPI } from "./wapAPI";

import { GetGenerator, PLD } from "./types/fetchedData";
import { createFormDataGenerator, createFormDataImages } from "./utils/createFormData";

import { PLDChanges, SetImages } from "./types/queryParams";

const pldApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        listPLD: build.query<PLD[], void>({
            query: () => ({
                url: "pld/list",
                method: 'GET',
            }),
        }),
        getGenerator: build.query<GetGenerator, void>({
            query: () => ({
                url: "pld/generator",
                method: 'GET',
            }),
        }),
        setGenerator: build.mutation<void, File>({
            query: (file) => ({
                url: "pld/generator",
                method: 'POST',
                headers: {'Content-Type': `multipart/form-data`},
                body: createFormDataGenerator(file)
            }),
        }),
        getPLDImages: build.query<string[], void>({
            query: () => ({
                url: "pld/images",
                method: 'GET',
            }),
        }),
        setPLDImages: build.mutation<void, SetImages>({
            query: ({file, fileName}) => ({
                url: "pld/images",
                method: 'POST',
                headers: {
                    "Content-Type": `multipart/form-data`,
                },
                body: createFormDataImages(file, fileName)
            }),
        }),
        getPLDChanges: build.query<PLDChanges, void>({
            query: () => ({
                url: "pld/changes",
                method: 'GET',
            }),
        }),
        generatePreview: build.mutation<void, any>({
            query: (values) => ({
                url: "pld/changes",
                method: 'POST',
                body: values
            }),
        }),
        generatePLD: build.mutation<void, void>({
            query: () => ({
                url: "pld/generate",
                method: 'POST',
            }),
        }),
    }),
    overrideExisting: true,
});

export const {
    useListPLDQuery,
    useGetGeneratorQuery,
    useSetGeneratorMutation,
    useGetPLDImagesQuery,
    useSetPLDImagesMutation,
    useGetPLDChangesQuery,
    useGeneratePreviewMutation,
    useGeneratePLDMutation
} = pldApi;