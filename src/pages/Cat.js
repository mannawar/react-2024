import {useGetCat} from '../hooks/useGetCat'

export const Cat = () => {
    const {data, isCatLoading, fetchedData} = useGetCat();
    if(isCatLoading) return <h1>loading...</h1>
    return (
        <div>
            <button onClick={fetchedData}>Refetch data</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}