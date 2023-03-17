import { useEffect } from "react";
import { Group, Text, useMantineTheme } from "@mantine/core"
import { Dropzone } from "@mantine/dropzone"

import { fileUploadErrorNotification } from "components/notifications/errors"
import { fileUploadNotification } from "components/notifications/success";

import { FiAlertOctagon, FiUpload } from "react-icons/fi";
import { DiJavascript1 } from "react-icons/di";

import { useSetGeneratorMutation } from "store/api/pldAPI";

interface Props {
    refetch: any;
}

const PldDropZone: React.FC<Props> = ({ refetch }) => {
    const theme = useMantineTheme();
    const [setGenerator, result] = useSetGeneratorMutation();
    

    useEffect(() => {
        if (result.isSuccess) {
            fileUploadNotification();
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return (
        <Dropzone
            mt={10}
            accept={{'application/javascript': ['.js'], 'text/javascript': ['.js']}}
            onDrop={(files) => setGenerator(files[0])}
            onReject={() => fileUploadErrorNotification("js")}
            maxSize={3 * 1024 ** 2}
            maxFiles={1}
        >
            <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                <Dropzone.Accept>
                    <FiUpload
                        size={"8vh"}
                        color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <FiAlertOctagon
                        size={"8vh"}
                        color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <DiJavascript1 size={"8vh"} color="#f7df1e" />
                </Dropzone.Idle>
                <div>
                    <Text size="xl" inline>
                        Drag your PLD generator file here
                    </Text>
                    <Text size="sm" color="dimmed" inline mt={10}>
                        JavaScript | .js
                    </Text>
                </div>
            </Group>
        </Dropzone>
    )
}

export default PldDropZone;