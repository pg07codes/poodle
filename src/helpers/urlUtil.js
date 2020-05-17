
function isUrlValid(str) {

    // returns -1 for invalid url, 0 for url Without Protocol, and 1 for url With Protocol 

    let urlWithProtocol = new RegExp('^(https?:\\/\\/)' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    let urlWithoutProtocol = new RegExp('^((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (urlWithProtocol.test(str)) {
        return 1;
    } else if (urlWithoutProtocol.test(str)) {
        return 0;
    } else {
        return -1;
    }

}

function getDomain(str) {

    if (isUrlValid(str) === -1) {
        return undefined;
    }

    let x;
    if (isUrlValid(str) === 1)
        x = new URL(str);
    else
        x = new URL(`http://${str}`);

    x = x.hostname;
    x = `http://${x}`;
    return x;

}

export {
    isUrlValid,
    getDomain
}



