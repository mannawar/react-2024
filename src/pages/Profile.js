import {useContext} from 'react';
import {AppContext} from '../App';
import { ChangeProfile } from "../components/ChangeProfile.js";

export const Profile = () => {
    const {name, setName} = useContext(AppContext)
    return(
        <>
            {" "}
            <div>Allah is alone. we do not associate partners to him.</div>
            <div>
                Profile user is {name}
                <ChangeProfile />
            </div>
        </>
    )
}