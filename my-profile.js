const createProfileElement = function (element, inner, parent, html = false) {
    let creation = document.createElement(element);
    if (html) creation.innerHTML = inner;
    if (!html) creation.innerText = inner;
    parent.append(creation);
    return creation;
}

window.onload = () => {
    console.log('This is my profile page!');

    const myName = createProfileElement('h1', 'Wesley Chappell', document.body);
    myName.setAttribute('class', 'name');

    const subHeader = createProfileElement('h2', 'Software Engineer', document.body);

    const favShows = createProfileElement('ul', 'favorite shows', document.body);
    favShows.setAttribute('class', 'my-details');

    [
        '24',
        'The Good Doctor',
        'Better Call Saul',
        'Modern Family',
        'Dr. Stone'
    ].forEach(title => {
        const creation = createProfileElement('li', title, favShows);
        creation.setAttribute('class', 'detail');
    });

    let today = new Date();
    const time = `${today.getMonth()}/${today.getDay()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    const showtime = createProfileElement('li',
        "I live in Baltimore, MD, and its currently <span id='clock'></span> here",
        favShows,
        true);

    const clock = createProfileElement('li', time, document.getElementById('clock'));

    setInterval(() => {
        today = new Date();
        clock.innerText = `${today.getMonth()}/${today.getDay()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    }, 1000);
}
