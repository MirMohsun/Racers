import Axios from "axios";

interface AxiosOptions {
    url: string;
    sender: string;
    data?: any;
    headers?: any;
    timeoutMS?: number;
    pureData?: boolean;
    params?: any;
    isNoToken?: boolean;
}

type AxiosGet = Omit<AxiosOptions, "data" | "pureData">;

const get = async ({
    url,
    sender,
    params,
    headers,
    timeoutMS
}: AxiosGet): Promise<any> => {
    try {
        const config: any = {
            url: url,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            validateStatus: () => true,
            timeout: timeoutMS || 30000
        };
        config.headers = {
            ...config.headers,
            ...headers
        };
        headers && (config.headers = headers);
        params && (config.params = params);
        const response = await Axios(config);
        if (response?.status >= 300) {
            // store.dispatch(AppStateActions._setError(response?.data?.error));
            console.warn("Error: ", sender, response?.data);
        }
        return response.data;
    } catch (error) {
        console.warn(`${sender}: ${error}`);
    }
};

export const IAxios = {
    get
};
