import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import editIcon from "../../assets/editIcon.svg";
import { OPEN_UPDATE_MODEL, SET_SELECTED_ITEM } from "../../redux/reducers/projectReducer";
import ProjectUpdateModel from "../projectUpdateModel";

const ProjectList = () => {
    const projectsList = useSelector(state => state?.projectsList?.projects);
    const [currentPage, setCurrentPage] = useState(1);
    const rowPerPage = 8;
    const totalPages = useMemo(() => Math.ceil(projectsList?.length / rowPerPage) || 1, [projectsList]);
    const dispatch = useDispatch();
    const handleOpenModel = (project) => {
        dispatch({ type: OPEN_UPDATE_MODEL, payload: true });
        dispatch({ type: SET_SELECTED_ITEM, payload: project });
    }

    const handleGetColor = (per) => {
        if (per < 50) return styles.bgRed;
        else if (per < 75) return styles.bgYellow;
        else if (per < 99) return styles.bgBlue;
        return styles.bgGreen;
    }

    return (
        <div className={styles.projectListMain}>
            <div className={styles.projectListBody}>
                <div className={styles.projectListHeader}>
                    <h6 className={styles.projectListTitle}>Projects List</h6>
                    <div className={styles.projectListDivider} />
                </div>
                <div className={styles.projectListTableMain}>
                    <table className={styles.projectListTable}>
                        <thead>
                            <tr className={styles.projectListHeaderTableRow}>
                                <th className={`${styles.projectListItem} ${styles.projectListHeadItem}`}>Project</th>
                                <th className={`${styles.projectListItem} ${styles.projectListHeadItem}`}>Budget</th>
                                <th className={`${styles.projectListItem} ${styles.projectListHeadItem}`}>Status</th>
                                <th className={`${styles.projectListItem} ${styles.projectListHeadItem}`}>Users</th>
                                <th className={`${styles.projectListItem} ${styles.projectListHeadItem}`}>Completion</th>
                                <th className={`${styles.projectListItem} ${styles.projectListHeadItem}`} style={{ textAlign: 'center' }}>Update</th>
                            </tr>
                        </thead>
                        <tbody className={styles.projectListTableBody}>
                            {projectsList?.slice((currentPage * rowPerPage) - rowPerPage, currentPage * rowPerPage)?.map((item) => (
                                <tr className={styles.projectListBodyTableRow} key={item?.id}>
                                    <td className={`${styles.projectListItem}`}>
                                        <div className={styles.projectListImageDiv}>
                                            <img loading="lazy" src={item.logo} alt={item.projectName} width="25px" height="25px" />
                                            <h6 className={styles.projectListNameDiv}>{item?.projectName}</h6>
                                        </div>
                                    </td>
                                    <td className={`${styles.projectListItem}`}>${item?.budget || 0} USD</td>
                                    <td className={`${styles.projectListItem}`}>
                                        <div className={styles.textAlign}>
                                            <div className={`${styles.projectListStatusIcon} ${item?.complete === 100 ? styles.completed : null}`} />{item?.complete === 100 ? 'Completed' : 'Pending'}
                                        </div>
                                    </td>
                                    <td className={`${styles.projectListItem}`}>
                                        <div className={styles.userImageList}>
                                            {item?.users?.map((item) => (
                                                <div title={item?.name} key={item?.id} className={styles.userIconDiv}><img alt={item?.name} src={item?.profile_image} width="100%" height="100%" /></div>
                                            ))}
                                        </div>
                                    </td>
                                    <td className={`${styles.projectListItem}`}>
                                        <div className={styles.textAlign}>
                                            {item?.complete || 0}%
                                            &nbsp;
                                            <div className={styles.projectListStatusBar}>
                                                <div className={`${styles.projectListStatusBarChild} ${handleGetColor(item?.complete)}`} style={{ width: `${item?.complete || 0}%` }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`${styles.projectListItem}`} style={{ textAlign: 'center' }}>
                                        <button className={styles.projectListEditButton} onClick={() => handleOpenModel(item)}>
                                            <img loading="lazy" src={editIcon} alt="EditIcon" width="20px" height="20px" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.tablePagination}>
                    <div className={styles.tablePaginationContent}>
                        <button className={styles.paginationButtons} onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>
                            <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVQ4jWNgoDJgJlOfMgMDAycDA8NnajhCg4GB4TwDA4MCNQxThxqmPWrYMDBMCWqYJqkamahhO7FAjYGKXh41dIgZCiu+FKlpqCIDA4MMNQ3ECQDpiBIxITx1jAAAAABJRU5ErkJggg==" alt="backIcon" />
                        </button>
                        {Array(totalPages).fill('').map((item, index) => (
                            <button key={index} className={`${styles.paginationButtons} ${index + 1 === currentPage ? styles.highlight : null}`} onClick={() => setCurrentPage(parseInt(index + 1, 10))}>{index + 1}</button>
                        ))}
                        <button className={styles.paginationButtons} onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === totalPages}>
                            <img loading="lazy" style={{ transform: 'rotate(180deg) ' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVQ4jWNgoDJgJlOfMgMDAycDA8NnajhCg4GB4TwDA4MCNQxThxqmPWrYMDBMCWqYJqkamahhO7FAjYGKXh41dIgZCiu+FKlpqCIDA4MMNQ3ECQDpiBIxITx1jAAAAABJRU5ErkJggg==" alt="RightIcon" />
                        </button>
                    </div>
                </div>
            </div>
            <ProjectUpdateModel />
        </div>
    );
};

export default ProjectList;
