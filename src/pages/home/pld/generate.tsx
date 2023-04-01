import { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { Button, Checkbox, Container, Stack } from "@mantine/core";

import { useAppSelector } from "store/hooks/hooks";

import CustomLoader from "components/loader/CustomLoader";
import { BsFiletypePdf } from "react-icons/bs";
import { useGeneratePLDMutation } from "store/api/pldAPI";
import { PLDGenerationErrorNotification, unauthorizedNotification } from "components/notifications/errors";
import { PLDGenerationNotification } from "components/notifications/success";

const Changes = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [generationLoading, setGenerationLoading] = useState(false);
    const [generatePLD, result] = useGeneratePLDMutation<any>();

    const router = useRouter();
    const role = useAppSelector((state) => state.user.auth.accessToken?.charAt(0));

    useEffect(() => {
        if (role === "0" || role === "1")
            router.back();
        else
            setIsLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (result.isError) {
            if (result.error.status === 400)
                PLDGenerationErrorNotification(result.error.data.message);
        } else if (result.isSuccess) {
            PLDGenerationNotification();
            setGenerationLoading(false);
            router.replace("/home/pld");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    return isLoaded ? (
        <>
            <Head><title>WAP | Generate PLD</title></Head>
            <Container m={0} fluid pb={40}>
                <h1 style={{textAlign: "center"}}>PLD</h1>
                <h3 style={{textAlign: "center", color: "dimgrey"}}>Generate Document</h3>
                <Stack align={"center"} mt={30} style={{width: "100%", minWidth: 100}}>
                    <iframe
                        src={process.env.BASE_URL + "/pldGenerated/PLD_Preview.pdf"}
                        height={"700px"}
                        width={"80%"}
                        style={{minWidth: 400}}
                    />
                    <Checkbox mt={30} checked={accepted} onChange={(event) => setAccepted(event.currentTarget.checked)} label={"By checking this box, I confirm that I'm 100% sure I want to generate the PLD, I understand that's this action is one-way only, this can't be undone and this will not be undone. I know that reverting the changes made to the database will be a nightmare and that it's likely not possible. I'm really 100% sure, as I was never this sure in my life that I want this PLD to be generated."} />
                    <Button loading={generationLoading} onClick={() => (setGenerationLoading(true), generatePLD())} disabled={!accepted} mt={20} color={"green"} w={"30%"} miw={250} leftIcon={<BsFiletypePdf size={20} />} variant="outline">
                        Generate PLD
                    </Button>
                </Stack>
            </Container>
        </>
    ) : <CustomLoader />;
}

export default Changes;