// 1. document.cookie.split(';') // dela prottak cookie ar por space hoya jabe



const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split(';')
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie){
        'country=us'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}