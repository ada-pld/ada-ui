import { useEffect, useState } from "react";

import { Group, Text, useMantineTheme } from "@mantine/core"
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"

import { fileUploadErrorNotification } from "components/notifications/errors"

import Image from "next/image";

import { IoImagesOutline } from "react-icons/io5";
import { useSetPLDImagesMutation } from "store/api/pldAPI";

interface Props {
    fileName: string;
    refetch: any;
}

const ImagesDropZone: React.FC<Props> = ({ fileName, refetch }) => {
    const [setImage, result] = useSetPLDImagesMutation();
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (result.isSuccess) {
            refetch();
        }
    }, [result])

    return (
        <>
            <Dropzone
                accept={IMAGE_MIME_TYPE}
                onDrop={(files) => setImage({file: files[0], fileName: fileName})}
                onReject={() => fileUploadErrorNotification("image")}
                maxFiles={1}
                maxSize={5 * 1024 ** 2}
            >
                <Group position="center" spacing="xl" style={{ minHeight: 100, pointerEvents: 'none', position: "relative" }}>
                    {imageError ? (
                        <>
                            <IoImagesOutline size={"8vh"} />
                            <div>
                                <Text size="xl" inline>
                                    {fileName}
                                </Text>
                                <Text size="sm" color="dimmed" inline mt={10}>
                                    Drag images here or click to select files
                                </Text>
                            </div>
                        </>
                    ) : (
                        <Image
                            src={process.env.BASE_URL + "/pldAssets/" + fileName + `#${new Date().getTime()}`}
                            alt={fileName}
                            priority
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                            style={{objectFit: "contain", padding: 20}}
                            onError={() => setImageError(true)}
                        />
                    )}
                </Group>
            </Dropzone>
            <Text mt={7} align="center">{fileName}</Text>
        </>
    )
}

export default ImagesDropZone;