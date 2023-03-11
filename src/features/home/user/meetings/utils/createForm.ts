import { useForm } from "@mantine/form";

export const createMeetingForm = () => {
    return useForm({
        initialValues: {
            title: "",
            agenda: "",
            time: "",
            group: "",
        },
        validate: {
            title: (value) => (value.length < 2 ? 'Title must be at least 5 characters long' : null),
        },
    });
}