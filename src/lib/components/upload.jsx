import React from "react";
import { FaTrash as DeleteIcon } from "react-icons/fa";

    /* this component need one state array for managing files */

const Upload = ({
    files = [],
    setFiles,
    multiple,
    validationFilesRegex,
    acceptFiles,
    acceptFilesDescription,
    acceptFilesTitle,
    selectFilesTitle,
    listOfSelecetedFilesTitle,
    rootClasses,
    uploadComponentClasses = "",
    selectFilesClasses = "",
    selectAcceptableClasses = "",
    listOfFilesContainerClasses = "",
    listOfFilesItemContainerClasses = "",
    listOfFilesItemNameClassess = "",
    listOfFilesItemDeleteButtonClassess = "",
}) => {
    const validationFilesFunc = (fileArray) => {
        let tempArray = fileArray;
        tempArray = tempArray.filter((file) =>
            validationFilesRegex ? validationFilesRegex.test(file.type) : true
        );
        return tempArray;
    };

    const onChange = (e) => {
        const newfiles = validationFilesFunc([...e.target.files]);
        setFiles(newfiles);
    };

    const onClick = (e) => {
        e.target.value = null;
        setFiles((files) => {
            return [];
        });
    };

    const deleteHandler = (deleteIndex) => {
        setFiles((files) => {
            return files.filter((file, index) => deleteIndex !== index);
        });
    };

    return (
        <div className={`suc-root ${rootClasses}`}>
            <div className="suc-upload-container">
                <label className={`suc-upload-component ${uploadComponentClasses}`}>
                    <svg
                        className="suc-svg-icon"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className={`suc-select-files ${selectFilesClasses}`}>
                        {selectFilesTitle || "select files"}
                    </span>
                    <span className={`suc-acceptable-files ${selectAcceptableClasses}`}>
                        {acceptFilesTitle || "Acceptable files"} :{" "}
                        {acceptFilesDescription || "all file types"}
                    </span>
                    <input
                        multiple={multiple}
                        type="file"
                        className="hidden"
                        accept={acceptFiles || "*"}
                        onChange={(e) => {
                            onChange(e);
                        }}
                        onClick={onClick}
                    />
                </label>
            </div>

            {files.length > 0 && (
                <div className={`suc-list-files-container ${listOfFilesContainerClasses}`}>
                    {files.length > 0 && (
                        <>
                            <div className="divider"></div>
                            <h4>{listOfSelecetedFilesTitle || "list of selected files:"}</h4>
                        </>
                    )}
                    {files.map((file, index) => {
                        return (
                            <div
                                className={`suc-list-files-item-container ${listOfFilesItemContainerClasses}`}
                                key={index}>
                                <span
                                    className={`suc-list-files-item-name ${listOfFilesItemNameClassess}`}>
                                    {file.name}
                                </span>
                                <button
                                    onClick={(e) => {
                                        deleteHandler(index);
                                    }}
                                    type="button"
                                    className={`suc-list-files-item-delete-button ${listOfFilesItemDeleteButtonClassess}`}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Upload;
