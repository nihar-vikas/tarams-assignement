import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AltContext } from "../../alterContext/alertContext";
import { OPEN_UPDATE_MODEL, PROJECT_LIST_UPDATES, SET_SELECTED_ITEM } from "../../redux/reducers/projectReducer";
import CustomModel from "../customModel";
import TextInput from "../textInput";
import styles from "./styles.module.css";

const ProjectUpdateModel = () => {
    const { setAlert } = AltContext();
    const dispatch = useDispatch();
    const storeItem = useSelector(state => state?.projectsList?.selectedItem);
    const [selectedItem, setSelectedItem] = useState({});
    const [handleError, setHandleError] = useState({
        name: false,
        amount: false,
    });
    const openModel = useSelector(state => state?.projectsList?.openUpdateModel);

    const handleClose = () => {
        dispatch({ type: OPEN_UPDATE_MODEL, payload: false });
        dispatch({ type: SET_SELECTED_ITEM, payload: {} });
    }

    useEffect(() => {
        setSelectedItem(JSON.parse(JSON.stringify(storeItem)));
    }, [openModel, storeItem]);

    const handleOnChange = (key, value) => {
        setSelectedItem((prev) => {
            const newData = { ...prev };
            switch (key) {
                case key:
                    newData[key] = value;
                    return newData;
                default:
                    return newData;
            }
        });
    }

    const handleOnChangeError = (key, val) => {
        setHandleError((prev) => ({ ...prev, [key]: val }));
    }

    const handleSave = () => {
        if (!selectedItem?.projectName) {
            handleOnChangeError('name', true);
        }
        if (!selectedItem?.budget) {
            handleOnChangeError('amount', true);
        }
        if (selectedItem?.projectName && selectedItem?.budget) {
            dispatch({ type: PROJECT_LIST_UPDATES, payload: selectedItem });
            setAlert('success', 'Details updated successfully');
            handleClose();
        }
    }

    return (
        <CustomModel title="Update Project Model" handleClose={handleClose} open={openModel}>
            <div className={styles.updateModelContentMain}>
                <div className={styles.updateModelContentBody}>
                    <div className={styles.updateModelContentItems}>
                        <TextInput onFocus={() => handleOnChangeError('name', false)} title="Project Name *" type="text" onError={handleError?.name} errorMessage="Please enter project name" placeholder="Project Name" value={selectedItem?.projectName || ''} onChange={(e) => handleOnChange('projectName', e.target.value.trimLeft())} />
                        <TextInput onFocus={() => handleOnChangeError('amount', false)} title="Budget *" type="number" onError={handleError?.amount} errorMessage="Please enter budget" placeholder="Budget" value={selectedItem?.budget || ''} onChange={(e) => handleOnChange('budget', e.target.value.trimLeft())} />
                    </div>
                    <div className={styles.updateStatusDiv}>
                        <h6 className={styles.projectStatusLabel}>Project Status *</h6>
                        <div className={styles.projectStatusDiv}>
                            <h6 className={styles.projectStatusPer}>{selectedItem?.complete} %</h6>
                            <input className={styles.projectStatusBar} type="range" value={selectedItem?.complete || 0} onChange={(e) => handleOnChange('complete', e.target.value.trimLeft())} />
                        </div>
                    </div>
                    <div className={styles.updateStatusDiv} style={{ textAlign: 'center', margin: '1rem 0', }}>
                        <button className={styles.saveButton} onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </CustomModel>
    );
};

export default ProjectUpdateModel;
