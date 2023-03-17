import { useForm } from "@mantine/form";

export interface CreateMeeting {
    title: string;
    datetime: string;
    group: string;
    agenda: string;
    location: string;
    groupName: string;
    groupColor: string;
    duration: string;
}

export const CreateMeetingForm = () => {
    return useForm({
        initialValues: {
            title: "",
            datetime: "",
            group: "",
            agenda: "",
            location: "",
            groupName: "",
            groupColor: "",
            duration: "",
        },
        validate: {
            title: (value) => (value.length < 5 ? 'Title must be at least 5 characters long' : null),
            location: (value) => (value.length < 2 ? 'Title must be at least 2 characters long' : null),
        },
    });
}
