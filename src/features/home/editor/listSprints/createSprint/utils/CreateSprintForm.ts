import { useForm } from '@mantine/form';

export const CreateSprintForm = () => {
    return useForm({
        initialValues: {
            name: '',
            workDaysNeeded: '',
        },
        validate: {
            name: (value) => (value.length < 2 ? 'Sprint name must have at least 2 letters' : null),
            workDaysNeeded: (value) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
        },
    });
};