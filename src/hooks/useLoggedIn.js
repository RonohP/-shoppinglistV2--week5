import { useEffect } from "react";
import { useHistory } from "react-router";
import useContextGetter from "./useContextGetter";

export default function useLoggedIn() {
    const context = useContextGetter();
    const history = useHistory();

    console.log(context.state.isUserLoggedIn);

    useEffect(() => {
        if (context.state.isUserLoggedIn) {
          history.push('/');
        }
    }, [context.state, history]);
}