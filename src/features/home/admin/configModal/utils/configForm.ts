import { useForm } from '@mantine/form';

interface Props {
    arrayOfObjects: Array<Object>;
}

export const EditUserForm = ({arrayOfObjects}: Props) => {
    var httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    var numberRegex = /^\d+$/;

    const initialValues = arrayOfObjects.reduce((acc: any, curr: any) => {
        acc[curr.name] = curr.value;
        return acc;
    }, {});

    return useForm({
        initialValues,
        validate: {
            SMTP_HOST: (value) => (value.length < 2 ? 'SMTP Host must have at least 2 letters' : null),
            SMTP_USER: (value) => (value.length < 2 ? 'SMTP User must have at least 2 letters' : null),
            SMTP_PORT: (value) => (!numberRegex.test(value) ? 'SMTP Port must be a number' : null),
            SMTP_PASSWORD: (value) => (value.length < 2 ? 'SMTP Password must have at least 4 letters' : null),
            HOSTNAME: (value) => (!httpRegex.test(value) ? 'Hostname is not valid' : null),
            DEFAULT_PASSWORD: (value) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
        },
    });
};