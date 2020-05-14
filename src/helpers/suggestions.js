
import POPULAR_WEBSITES from './POPULAR_WEBSITES'

function initialiseWebsiteSuggestion(filledWithSuggestions){
    filledWithSuggestions=[filledWithSuggestions[0],...POPULAR_WEBSITES] 
    // here^^ a new var is created and reference is lost , so returning new variable created
    return filledWithSuggestions;
}

function insertForWebsiteSuggestion(str, isFullUrl) {
    let tempUrl;
    if (isFullUrl) {
        let url = new URL(str);
        tempUrl = {
            protocol: url.protocol,
            siteName: url.hostname.split(".")[0],
            hostname: url.hostname
        };
    } else {
        tempUrl = {
            protocol:"",
            siteName: str.split(".")[0],
            hostname: str
        };
    }
    let temp = localStorage.getItem('wsug');
    if (temp !== null) {
        temp = JSON.parse(temp);
        temp.push(tempUrl);
    } else {
        temp = [];
        temp.push(tempUrl);
        temp=initialiseWebsiteSuggestion(temp);
    }
    localStorage.setItem('wsug', JSON.stringify(temp));
}

function insertForQuerySuggestion(str) {

    let temp = localStorage.getItem('qsug');
    if (temp !== null) {
        temp = JSON.parse(temp);
        temp.push({ query: str, time: Date.now() });
    } else {
        temp = [];
        temp.push({ query: str, time: Date.now() });
    }
    localStorage.setItem('qsug', JSON.stringify(temp));
}

export {
    insertForQuerySuggestion,
    insertForWebsiteSuggestion
}