import { useEffect } from "react";
import { useHistory } from "react-router";
import useContextGetter from "./useContextGetter";

export default function useLoggedIn(){
    const context = useContextGetter();
    const history = useHistory();

    useEffect(() => {
        if (context.state.isUserLoggedIn){
            history.push('/home');
        }
    }, [context.state, history]);
}