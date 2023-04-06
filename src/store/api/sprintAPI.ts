import { adaAPI } from "./adaAPI";

import { CreateSprint, Sprint } from "types/apiTypes";

const sprintApi = adaAPI.injectEndpoints({
    endpoints: (build) => ({
        getSprint: build.query<Sprint, void>({
            query: () => ({
                url: `sprint/active`,
                method: 'GET',
            }),
        }),
        listSprints: build.query<any, void>({
            query: () => ({
                url: `sprint/list`,
                method: 'GET',
            }),
        }),
        selectSprint: build.mutation<any, number>({
            query: (id) => ({
                url: `sprint/use/${id}`,
                method: 'GET',
            }),
        }),
        createSprint: build.mutation<any, CreateSprint>({
            query: ({ name, workDaysNeeded }) => ({
                url: `sprint/create`,
                method: 'POST',
                body: {
                    name: name,
                    workDaysNeeded: workDaysNeeded
                }
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useGetSprintQuery,
    useListSprintsQuery,
    useSelectSprintMutation,
    useCreateSprintMutation
} = sprintApi;