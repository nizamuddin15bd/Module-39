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


// cookie hocca
// Browser  caila kecu inpormation rakta pare.stor kora rakha dorkar hola surver a rakha dai
// 1.cookies deya rakha jai