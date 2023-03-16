import { Chip } from "@mantine/core";

import { UseFormReturnType } from "@mantine/form";

import { Meeting } from "store/api/types/fetchedData";

interface Props {
    form: UseFormReturnType<{id: number; report: string;}, (values: {id: number; report: string;}) => {id: number; report: string;}>;
    meeting: Meeting;
}

const ValidateMeetingRows: React.FC<Props> = ({ form, meeting }) => {
    return (
        <>
            {meeting.userAttendances.map((attendance) => (
                <tr key={attendance.id}>
                <td>{attendance.user.firstname} {attendance.user.lastname}</td>
                    <Chip.Group>
                        <td>
                            <Chip
                                variant="light"
                                size="xs"
                                radius="sm"
                                value="Absent"
                                color={"red"}
                                onClick={() =>
                                    form.setValues({
                                        [`presence_${attendance.id}`]: "absent"
                                    })
                                }
                            >
                                Absent
                            </Chip>
                        </td>
                        <td>
                            <Chip
                                variant="light"
                                size="xs"
                                radius="sm"
                                value="Excused"
                                color={"orange"}
                                onClick={() =>
                                    form.setValues({
                                        [`presence_${attendance.id}`]: "na"
                                    })
                                }
                            >
                                Excused
                            </Chip>
                        </td>
                        <td>
                            <Chip
                                variant="light"
                                size="xs"
                                radius="sm"
                                value="Present"
                                color={"green"}
                                onClick={() =>
                                    form.setValues({
                                        [`presence_${attendance.id}`]: "present"
                                    })
                                }
                            >
                                Present
                            </Chip>
                        </td>
                    </Chip.Group>
                </tr>
            ))}
        </>
    );
}

export default ValidateMeetingRows;