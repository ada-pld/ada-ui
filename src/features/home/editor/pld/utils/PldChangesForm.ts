import { useForm } from "@mantine/form";

import { PLDChanges } from "store/api/types/queryParams";

interface ReportData {
    [key: string]: string;
}

export const PldChangesForm = (initialData: PLDChanges) => {
    return useForm({
        initialValues: {
            pldChanges: `${initialData.cardAdded}\n${initialData.cardModified}`,
            ...initialData.advancementReports.reduce((acc: ReportData, report) => {
                acc[`report-${report.userId}`] = report.report;

                return acc;
            }, {}),
        },
        validate: {},
    });
};