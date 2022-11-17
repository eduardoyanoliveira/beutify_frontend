import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { axiosInstance } from "../../services/axios";

/**
 * @param httpGetClient The http get client to make get request to the api
 * @param url the Url that will be use to perform the get operation
 * @param urlParams a string of url params to help filter data
 * @param options useQuery options object
 */
function useGet<T>(
    url: string, 
    urlParams?: string, 
    options?: Omit<UseQueryOptions<T, unknown, T, QueryKey>, 'initialData' | 'queryKey'>
){

    const params = urlParams ? `/?${urlParams}` : '';
    const fullUrl = url + params ;

    const { data, isFetching, error } = useQuery<T>([url], async () => {

        const response = await axiosInstance().get(fullUrl);

        return response.data;
    },{
        ...options
    });

    return { isFetching, error, data };
};

export default useGet;