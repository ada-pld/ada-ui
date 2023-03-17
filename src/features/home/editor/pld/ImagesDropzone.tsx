import { useEffect, useState } from "react";

import { Group, Text } from "@mantine/core"
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"

import { fileUploadErrorNotification } from "components/notifications/errors"

import Image from "next/image";

import { IoImagesOutline } from "react-icons/io5";
import { useSetPLDImagesMutation } from "store/api/pldAPI";

import { imageUploadNotification } from "components/notifications/success";
import CustomLoader from "components/loader/CustomLoader";

interface Props {
    fileName: string;
}

const ImagesDropZone: React.FC<Props> = ({ fileName }) => {
    const [setImage, result] = useSetPLDImagesMutation();

    const [imageError, setImageError] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (result.isSuccess) {
            imageUploadNotification(fileName);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <>
                            <Image
                                src={process.env.BASE_URL + "/pldAssets/" + fileName + `?${new Date().getTime()}`}
                                alt={fileName}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                                style={{objectFit: "contain", padding: 20}}
                                onError={() => setImageError(true)}
                                onLoadingComplete={(() => setLoader(false))}
                            />
                            {loader && <CustomLoader />}
                        </>
                    )}
                </Group>
            </Dropzone>
            <Text mt={7} align="center" italic>{fileName}</Text>
        </>
    )
}

export default ImagesDropZone;