import { Card } from "types/apiTypes";
import { CreateCard, EditCard, UpdateStatus } from "./types/queryParams";

import { wapAPI } from "./wapAPI";

const configApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        getSprint: build.query<any, void>({
            query: () => ({
                url: `sprint/active`,
                method: 'GET',
            }),
        }),
        getCards: build.query<Card[], string>({
            query: (id) => ({
                url: `/users/${id}/cards`,
                method: 'GET',
            }),
        }),
        updateCardStatus: build.mutation<void, UpdateStatus>({
            query: ({id, status}) => ({
                url: `/card/update/${id}/${status}`,
                method: 'GET',
            }),
        }),
        createCard: build.mutation<void, CreateCard>({
            query: ({values}) => ({
                url: `/card/create`,
                method: 'POST',
                body: {
                    name: values.name,
                    asWho: values.asWho,
                    task: values.task,
                    description: values.description,
                    workingDays: values.workingDays,
                    dods: values.dods,
                    partId: values.partId,
                    assignees: values.assignees,
                }
            }),
        }),
        editCard: build.mutation<void, EditCard>({
            query: ({values, id}) => ({
                url: `/card/edit/${id}`,
                method: 'POST',
                body: {
                    name: values.name,
                    asWho: values.asWho,
                    task: values.task,
                    description: values.description,
                    workingDays: values.workingDays,
                    dods: values.dods,
                    partId: values.partId,
                    assignees: values.assignees,
                }
            }),
        }),
        deleteCard: build.mutation<void, number>({
            query: (id) => ({
                url: `/card/delete/${id}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useGetCardsQuery,
    useGetSprintQuery,
    useUpdateCardStatusMutation,
    useCreateCardMutation,
    useEditCardMutation,
    useDeleteCardMutation,
} = configApi;