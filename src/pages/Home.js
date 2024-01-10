import {useQuery} from '@tanstack/react-query'
import Axios from 'axios';

export const Home = () => {
    const {data:catData, isLoading, isError, refetch} = useQuery({queryKey: ["cat"], queryFn:() => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }})
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>Sorry there was an error</h1>
    }
    return(
        <>
            <h1>This is home page. Made to please Allah alone! <p>{catData?.fact}</p></h1>

            <button onClick={refetch}>Refetch data</button>
        </>
    )
}