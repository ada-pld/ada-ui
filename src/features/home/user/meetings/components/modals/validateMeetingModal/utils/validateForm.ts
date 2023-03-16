import { useForm } from "@mantine/form";

export interface ValidateMeeting {
    title: string;
    datetime: Date;
    agenda: string;
    location: string;
    duration: string;
}

export const validateMeetingForm = (meetingId: number) => {
    return useForm({
        initialValues: {
            id: meetingId,
            report: "",
        },
    });
}