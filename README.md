# simple upload component for React.js

#### fast , easy to use, fully customizable

[![MehhdiMarzban - simple-upload-component](https://img.shields.io/static/v1?label=MehhdiMarzban&message=simple-upload-component&color=blue&logo=github)](https://github.com/MehhdiMarzban/simple-upload-component "Go to GitHub repo")

[![npm - simple-upload-component](https://img.shields.io/badge/npm-simple--upload--component-green)](https://www.npmjs.com/package/simple-upload-component)

[![GitHub release](https://img.shields.io/github/release/MehhdiMarzban/simple-upload-component?include_prereleases=&sort=semver&color=blue)](https://github.com/MehhdiMarzban/simple-upload-component/releases/)

[![issues - simple-upload-component](https://img.shields.io/github/issues/MehhdiMarzban/simple-upload-component)](https://github.com/MehhdiMarzban/simple-upload-component/issues)

[![View site - personal site](https://img.shields.io/badge/View_site-mehdimarban.ir-2ea44f?style=for-the-badge)](https://mehdi-marzban.ir/)

---

## Installation

simple-upload-component requires [React.js](https://reactjs.org/) v18+ to run.

Install this component.

```sh
npm i simple-upload-component
```

---

## Preview

![simple-upload-component before set files](https://github.com/MehhdiMarzban/simple-upload-component/blob/main/upload.png?raw=true)

## ![simple-upload-component after set files](https://github.com/MehhdiMarzban/simple-upload-component/blob/main/uploadwithfile.png?raw=true)

## Documentation

#### main properties:

| property                  | type                          | isRequired | default                 |
| ------------------------- | ----------------------------- | ---------- | ----------------------- |
| files                     | React state Array             | true       | none (\*)               |
| setFiles                  | react state function          | true       | none (\*)               |
| multiple                  | boolean                       | false      | false                   |
| validationFilesRegex      | regex                         | false      | \* (accept all files)   |
| acceptFiles               | string [html input attribute] | false      | \*                      |
| selectFilesTitle          | string                        | false      | select files            |
| acceptFilesTitle          | string                        | false      | Acceptable files        |
| acceptFilesDescription    | string                        | false      | all file types          |
| listOfSelecetedFilesTitle | string                        | false      | list of selected files: |

:rotating_light: If state is not set, it will not work :rotating_light:

#### customization properties:

| property                            | type   | isRequired |
| ----------------------------------- | ------ | ---------- |
| rootClasses                         | string | false      |
| uploadComponentClasses              | string | false      |
| selectFilesClasses                  | string | false      |
| selectAcceptableClasses             | string | false      |
| listOfFilesContainerClasses         | string | false      |
| listOfFilesItemContainerClasses     | string | false      |
| listOfFilesItemNameClassess         | string | false      |
| listOfFilesItemDeleteButtonClassess | string | false      |

#### simple useage in react:

```javascript
import Upload from "simple-upload-react";
import { useState } from "react";
function App() {
    const [files, setFiles] = useState([]);
    return (
        <div>
            <Upload files={files} setFiles={setFiles} multiple />
        </div>
    );
}

export default App;
```

## License

Released under [MIT](/LICENSE) by [@MehhdiMarzban](https://github.com/MehhdiMarzban).
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

**Free Software, Hell Yeah!**
