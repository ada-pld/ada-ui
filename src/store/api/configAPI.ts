import { wapAPI } from "./wapAPI";

const configApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        getConfig: build.query<any, void>({
            query: () => ({
                url: "config",
                method: 'GET',
            }),
        }),
        refreshCache: build.mutation<void, void>({
            query: () => ({
                url: "config/refresh",
                method: 'GET',
            }),
        }),
        editConfig: build.mutation<void, any>({
            query: ({smtphost, smtpuser, smtpport, smtppassword, hostname, defaultPassword, underMaintenance}) => ({
                url: "config/edit",
                method: 'POST',
                body: {
                    smtphost: smtphost,
                    smtpuser: smtpuser,
                    smtpport: smtpport,
                    smtppassword: smtppassword,
                    hostname: hostname,
                    defaultPassword: defaultPassword,
                    underMaintenance: underMaintenance,
                }
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const { useGetConfigQuery, useRefreshCacheMutation, useEditConfigMutation } = configApi;