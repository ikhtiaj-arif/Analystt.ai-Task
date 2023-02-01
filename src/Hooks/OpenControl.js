import { useCallback, useState } from "react";

export default function useOpenControl(initialState){
    const [open, setOpen] = useState(initialState);

    const toggle = useCallback(()=>{
        setOpen((state) => !state)
    }, [setOpen]);
    return { open, toggle}
}