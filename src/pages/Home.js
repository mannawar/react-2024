import {useContext} from 'react';
import {AppContext} from '../App';

export const Home = (props) => {
    const {name} = useContext(AppContext)
    return(
        <h1>This is home page. Made to please Allah alone! user is {name}</h1>
    )
}