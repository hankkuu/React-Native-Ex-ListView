const resources = {
    "react":require('../../assets/react.jpeg')
}

export function getAssetByFilename(filename) {
    if(filename !== '') {
        return resources[filename];
    }
    return null;
}