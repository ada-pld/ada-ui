import { wapAPI } from "./wapAPI";

const meetingsApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        getMeetings: build.query<any, void>({
            query: () => ({
                url: "rendezVous/list",
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const { useGetMeetingsQuery } = meetingsApi;