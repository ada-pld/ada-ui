import { useForm } from "@mantine/form";

import { Meeting } from "store/api/types/fetchedData";

import moment from "moment";

interface Props {
    meeting: Meeting;
}

export interface EditMeeting {
    id: number;
    title: string;
    datetime: Date;
    agenda: string;
    location: string;
    duration: string;
}

export const EditMeetingForm = ({ meeting }: Props) => {
    return useForm({
        initialValues: {
            id: meeting.id,
            title: meeting.title,
            datetime: moment(meeting.date, 'YYYY-MM-DDThh:mm:ss.SSSZ').toDate(),
            agenda: meeting.agenda,
            location: meeting.location,
            duration: moment.utc().startOf('day').add({ minutes: meeting.duration }).format('HH:mm'),
        },
        validate: {
            title: (value) => (value.length < 5 ? 'Title must be at least 5 characters long' : null),
            location: (value) => (value.length < 2 ? 'Title must be at least 2 characters long' : null),
        },
    });
}
