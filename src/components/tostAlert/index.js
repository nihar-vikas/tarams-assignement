/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { AltContext } from "../../alterContext/alertContext";
import './styles.css';

const TostAlert = () => {
    const [open, setOpen] = useState(false);
    const { state, dispatch } = AltContext();
    useEffect(() => {
        if (state?.alertState?.open) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 2000);
            setTimeout(() => {
                dispatch({
                    type: "alertState",
                    payload: { open: false, message: "", type: "" }
                });
            }, 3000);
        }
    }, [state]);

    return state?.alertState?.open ? (
        <div className={`alertMessage ${state?.alertState?.type} ${open ? "show" : "hide"}`}>
            <h6 className={`alertMessageLabel`}>{state?.alertState?.message}</h6>
        </div>
    ) : (
        <></>
    );
};

export default TostAlert;
