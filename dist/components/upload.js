"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* this component need one state array for managing files */
const Upload = _ref => {
  let {
    files = [],
    setFiles,
    rootClasses,
    acceptFilesDescription,
    acceptFilesTitle,
    selectFilesTitle,
    acceptFiles,
    multiple,
    listOfSelecetedFilesTitle,
    validationFilesRegex,
    uploadComponentClasses = "",
    selectFilesClasses = "",
    selectAcceptableClasses = "",
    listOfFilesContainerClasses = "",
    listOfFilesItemContainerClasses = "",
    listOfFilesItemNameClassess = "",
    listOfFilesItemDeleteButtonClassess = ""
  } = _ref;

  const validationFilesFunc = fileArray => {
    let tempArray = fileArray;
    tempArray = tempArray.filter(file => validationFilesRegex ? validationFilesRegex.test(file.type) : true);
    return tempArray;
  };

  const _onChange = e => {
    const newfiles = validationFilesFunc([...e.target.files]);
    setFiles(newfiles);
  };

  const onClick = e => {
    e.target.value = null;
    setFiles(files => {
      return [];
    });
  };

  const deleteHandler = deleteIndex => {
    setFiles(files => {
      return files.filter((file, index) => deleteIndex !== index);
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "suc-root ".concat(rootClasses)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "suc-upload-container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "suc-upload-component ".concat(uploadComponentClasses)
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "suc-svg-icon",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "suc-select-files ".concat(selectFilesClasses)
  }, selectFilesTitle || "select files"), /*#__PURE__*/_react.default.createElement("span", {
    className: "suc-acceptable-files ".concat(selectAcceptableClasses)
  }, acceptFilesTitle || "Acceptable files", " :", " ", acceptFilesDescription || "all file types"), /*#__PURE__*/_react.default.createElement("input", {
    multiple: multiple,
    type: "file",
    className: "hidden",
    accept: acceptFiles || "*",
    onChange: e => {
      _onChange(e);
    },
    onClick: onClick
  }))), files.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "suc-list-files-container ".concat(listOfFilesContainerClasses)
  }, files.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/_react.default.createElement("h4", null, listOfSelecetedFilesTitle || "list of selected files:")), files.map((file, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "suc-list-files-item-container ".concat(listOfFilesItemContainerClasses),
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "suc-list-files-item-name ".concat(listOfFilesItemNameClassess)
    }, file.name), /*#__PURE__*/_react.default.createElement("button", {
      onClick: e => {
        deleteHandler(index);
      },
      type: "button",
      className: "suc-list-files-item-delete-button ".concat(listOfFilesItemDeleteButtonClassess)
    }, /*#__PURE__*/_react.default.createElement(_fa.FaTrash, null)));
  })));
};

var _default = Upload;
exports.default = _default;