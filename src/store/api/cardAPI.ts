import { Sprint, UserCards } from "types/apiTypes";
import { CreateCard, EditCard, GetUserCards, RejectCard, UpdateStatus } from "./types/queryParams";

import { wapAPI } from "./wapAPI";

const configApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        getCards: build.query<UserCards, GetUserCards>({
            query: ({userId, sprintId}) => ({
                url: `/users/cardsStats?sprintId=${sprintId.toString()}${userId ? `&userId=${userId}` : ''}`,
                method: 'GET',
            }),
        }),
        getCardList: build.query<any, number>({
            query: (sprintId) => ({
                url: `/card/list?sprintId=${sprintId.toString()}`,
                method: 'GET',
            }),
        }),
        getSprint: build.query<Sprint, void>({
            query: () => ({
                url: `sprint/active`,
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
        approveCard: build.mutation<void, number>({
            query: (id) => ({
                url: `/card/approve/${id}`,
                method: 'GET',
            }),
        }),
        rejectCard: build.mutation<void, RejectCard>({
            query: ({id, reason}) => ({
                url: `/card/reject/${id}`,
                method: 'POST',
                body: {
                    reason: reason,
                }
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useGetCardsQuery,
    useGetCardListQuery,
    useGetSprintQuery,
    useUpdateCardStatusMutation,
    useCreateCardMutation,
    useEditCardMutation,
    useDeleteCardMutation,
    useApproveCardMutation,
    useRejectCardMutation,
} = configApi;