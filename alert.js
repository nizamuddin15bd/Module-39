console.log('i am here');
// alert('ma is Coming!!');


const maComing = () => {
    alert('Ammu is comming, open the book');
}


const askPicnic = () => {
    const respons = confirm('Are you going to picnic');
    console.log(respons);
    if (respons === true) {
        alert('amk free ta bkash kora daw');
    }
    else {
        console.log('DGM!!! Door e giya mor!!!');
    }
}


const askName = () => {
    const name = prompt('what is your name?');
    if (name) {
        console.log(name);
    }
}
