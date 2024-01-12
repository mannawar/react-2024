import {useQuery} from '@tanstack/react-query'
import Axios from 'axios';

export const useGetCat = () => {
    const {data, refetch, isLoading: isCatLoading, error} = useQuery(
        { queryKey:["cat"], 
          queryFn: async () => { return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        }});

    const fetchedData = () => {
        alert("Fetched new data");
        refetch();
    }

    if(error){
        throw new Error(error.message);
    }

    return {data, fetchedData, isCatLoading, error};
}