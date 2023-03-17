import { useEffect, useState } from "react";
import { Button, Divider, Grid, Group, Stack, Text, Textarea } from "@mantine/core";

import { BsFiletypePdf } from "react-icons/bs";
import { useGeneratePreviewMutation } from "store/api/pldAPI";
import { PLDChanges } from "store/api/types/queryParams";

import { PldChangesForm } from "./utils/PldChangesForm";

import { generatePreviewNotification } from "components/notifications/success";
import { generatePreviewErrorNotification } from "components/notifications/errors";
import { useRouter } from "next/router";

interface Props {
    changes: PLDChanges;
}

const PldChanges: React.FC<Props> = ({ changes }) => {
    const form = PldChangesForm(changes);
    const router = useRouter();
    const [generatePreview, result] = useGeneratePreviewMutation<any>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)
        generatePreview(form.values);
    }

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400) {
                generatePreviewErrorNotification(result.error.data.message);
            }
        } else if (result.isSuccess) {
            generatePreviewNotification();
            setIsLoading(false);
            router.push("/home/pld/generate");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return (
        <form onSubmit={handleSubmit}>
            <Textarea withAsterisk={false} required mt={40} minRows={2} maxRows={3} label={<Text weight={"bold"} size={"md"} pb={10}>PLD cards changelog</Text>} placeholder="No change since the last PLD generation" {...form.getInputProps('pldChanges', { type: 'input' })} />
            <Divider mt={20} />
            <Grid mt={10} grow>
                {changes.advancementReports.map((report, index) => (
                    <Grid.Col key={index} span={"content"}>
                        <Textarea withAsterisk={false} required miw={300} minRows={3} maxRows={3} label={<Text size={"sm"} pb={5}>{report.firstname} {report.lastname}</Text>} {...form.getInputProps(`report-${report.userId}`, { type: "input" })} />
                    </Grid.Col>
                ))}
            </Grid>
            <Stack align={"center"} mt={30} style={{width: "100%", minWidth: 100}}>
                <Button loading={isLoading} type="submit" w={"30%"} miw={250} leftIcon={<BsFiletypePdf size={20} />} variant="outline">
                    Confirm and preview PLD
                </Button>
            </Stack>
        </form>
    );
}

export default PldChanges;