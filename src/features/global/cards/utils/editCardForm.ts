import { useForm } from '@mantine/form';

import { Card } from 'types/apiTypes';

export const editCardForm = (card: Card) => {
    return useForm({
        initialValues: {
            name: card.name,
            asWho: card.asWho,
            task: card.task,
            description: card.description,
            partId: card.part.id,
            workingDays: card.workingDays,
            dods: card.dods,
            assignees: card.assignees.map((assignee) => assignee.id),
        },
        validate: {
            workingDays: (value) => (value === null || value <= 0 ? 'You must work at least 0.5 days' : null),
        }
    });
};