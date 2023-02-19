import { useForm } from "@mantine/form";

export const addPartForm = () => {
    return useForm({
        initialValues: {
            name: '',
        },
        validate: {
            name: (value) => (value.length < 2 ? 'Part name must have at least 2 letters' : null),
        },
    });
}