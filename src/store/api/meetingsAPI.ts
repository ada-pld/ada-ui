import { CreateMeeting, EditMeeting, ValidateMeeting } from "./types/queryParams";
import { wapAPI } from "./wapAPI";

const meetingsApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        getMeetings: build.query<any, void>({
            query: () => ({
                url: "rendezVous/list",
                method: 'GET',
            }),
        }),
        editMeeting: build.mutation<any, EditMeeting>({
            query: ({ meeting }) => ({
                url: "rendezVous/edit",
                method: 'POST',
                body: {
                    id: meeting.id,
                    title: meeting.title,
                    date: meeting.date,
                    agenda: meeting.agenda,
                    duration: meeting.duration,
                    location: meeting.location,
                }
            }),
        }),
        validateMeeting: build.mutation<any, ValidateMeeting>({
            query: ({ meetingId, report, attendances }) => ({
                url: "rendezVous/edit",
                method: 'POST',
                body: {
                    id: meetingId,
                    report: report,
                    attendances: attendances,
                    passed: true,
                }
            }),
        }),
        createMeeting: build.mutation<any, CreateMeeting>({
            query: ({ meeting }) => ({
                url: "rendezVous/create",
                method: 'POST',
                body: {
                    title: meeting.title,
                    date: meeting.date,
                    agenda: meeting.agenda,
                    duration: meeting.duration,
                    location: meeting.location,
                    ...(meeting.newGroup && {
                        newGroup: {
                            name: meeting.newGroup.name,
                            color: meeting.newGroup.color,
                            duration: meeting.newGroup.duration,
                            location: meeting.newGroup.location,
                        },
                    }),
                    ...(meeting.groupId && { groupId: meeting.groupId }),
                }
            }),
        }),
        deleteMeeting: build.mutation<void, number>({
            query: (id) => ({
                url: `rendezVous/delete/${id}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useGetMeetingsQuery,
    useCreateMeetingMutation,
    useEditMeetingMutation,
    useValidateMeetingMutation,
    useDeleteMeetingMutation
} = meetingsApi;