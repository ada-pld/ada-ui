interface Props {
    checked: boolean;
    setMultiple: React.Dispatch<React.SetStateAction<boolean>>;
    form: any;
}

export const handleAssignees = ({checked, setMultiple, form}: Props) => {
    if (!checked)
        form.values.assignees = [];
    setMultiple(checked);
}