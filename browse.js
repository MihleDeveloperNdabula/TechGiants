const popularSlideshow = document.querySelector('.popular_slideshow');
const newSlideshow = document.querySelector('.new_slideshow');
const childrensSlideshow = document.querySelector('.childrens_slideshow');
const academicSlideshow = document.querySelector('.academic_slideshow');

const popularBooksCurrent = [
  {
    isbn: '9780007443499',
    title: 'Earth Girl',
    author: 'Janet Edwards',
    description: 'Jarra is stuck on Earth while the rest of humanity portals around the universe. But can she prove to the norms that she’s more than just an Earth Girl?\n2788. Only the handicapped live on Earth. While everyone else portals between worlds, 18-year-old Jarra is among the one in a thousand people born with an immune system that cannot survive on other planets. Sent to Earth at birth to save her life, she has been abandoned by her parents. She can’t travel to other worlds, but she can watch their vids, and she knows all the jokes they make. She’s an ‘ape’, a ‘throwback’, but this is one ape girl who won’t give in.\nJarra invents a fake background for herself – as a normal child of Military parents – and joins a class of norms that is on Earth to excavate the ruins of the old cities. When an ancient skyscraper collapses, burying another research team, Jarra’s role in their rescue puts her in the spotlight. No hiding at back of class now. To make life more complicated, she finds herself falling in love with one of her classmates – a norm from another planet. Somehow, she has to keep the deception going.\nA freak solar storm strikes the atmosphere, and the class is ordered to portal off-world for safety – no problem for a real child of military parents, but fatal for Jarra. The storm is so bad that the crews of the orbiting solar arrays have to escape to planet below: the first landing from space in 600 years. And one is on collision course with their shelter.',
    date_published: '2012-08-16',
    language: 'English',
    num_pages: 358,
    fiction: 'Fiction',
    genres: ['Science Fiction' , 'Young Adult'],
    tropes: ['Friends to lovers' , 'Coming of age'],
    features: ['Dystopia' , '1st person narrator'],
    content_warnings: []
  },
  {
    isbn: 'no_cover_available',
    title: 'Placeholder',
    author: 'Joe Bloggs',
    description: 'Blah blah blah',
    date_published: '2026-01-03',
    language: 'English',
    num_pages: 420,
    fiction: 'Non-fiction',
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
  },
  {
    isbn: 'no_cover_available',
    title: 'Placeholder',
    author: 'Joe Bloggs',
    description: 'Blah blah blah',
    date_published: '2026-01-03',
    language: 'English',
    num_pages: 420,
    fiction: 'Non-fiction',
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
  },
    {
    isbn: 'no_cover_available',
    title: 'Placeholder',
    author: 'Joe Bloggs',
    description: 'Blah blah blah',
    date_published: '2026-01-03',
    language: 'English',
    num_pages: 420,
    fiction: 'Non-fiction',
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
  },
  {
    isbn: '9780007443505',
    title: 'Earth Star',
    author: 'Janet Edwards',
    description: 
    '18-year-old Jarra has a lot to prove. After being awarded one of the military’s highest honours for her role in a daring rescue attempt, Jarra finds herself – and her Ape status – in the spotlight. Jarra is one of the unlucky few born with an immune system that cannot survive on other planets. Derided as an ‘ape’ – a ‘throwback’ – by the rest of the universe, Jarra is on a mission to prove that Earth Girls are just as good as anyone else.\nExcept now the planet she loves is under threat by what could be humanity’s first ever alien contact. Jarra’s bravery – and specialist knowledge – will once again be at the centre of the maelstrom, but will the rest of the universe consider Earth worth fighting for?'
    ,
    date_published: '2013-08-15',
    language: 'English',
    num_pages: 374,
    fiction: 'Fiction',
    genres: ['Science Fiction' , 'Young Adult'],
    tropes: [],
    features: ['Dystopia' , '1st person narrator' , 'Part of a series'],
    content_warnings: ['Minor character death' , 'Grief']
  },
  {
    isbn: 'no_cover_available',
    title: 'Placeholder',
    author: 'Joe Bloggs',
    description: 'Blah blah blah',
    date_published: '2026-01-03',
    language: 'English',
    num_pages: 420,
    fiction: 'Non-fiction',
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
  },
    {
    isbn: 'no_cover_available',
    title: 'Placeholder',
    author: 'Joe Bloggs',
    description: 'Blah blah blah',
    date_published: '2026-01-03',
    language: 'English',
    num_pages: 420,
    fiction: 'Non-fiction',
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
  },
    {
    isbn: 'no_cover_available',
    title: 'Placeholder',
    author: 'Joe Bloggs',
    description: 'Blah blah blah',
    date_published: '2026-01-03',
    language: 'English',
    num_pages: 420,
    fiction: 'Non-fiction',
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
  },
  {
    isbn: '9781501139239',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: 
    'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?\nMonique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career.\nSummoned to Evelyn’s luxurious apartment, Monique listens in fascination as the actress tells her story. From making her way to Los Angeles in the 1950s to her decision to leave show business in the ‘80s, and, of course, the seven husbands along the way, Evelyn unspools a tale of ruthless ambition, unexpected friendship, and a great forbidden love. Monique begins to feel a very real connection to the legendary star, but as Evelyn’s story nears its conclusion, it becomes clear that her life intersects with Monique’s own in tragic and irreversible ways.'
    ,
    date_published: '2017-06-17',
    language: 'English',
    num_pages: 389,
    fiction: 'Fiction',
    genres: ['Realistic fiction', 'Historical fiction', 'Romance'],
    tropes: ['Miscommunication'],
    features: ['LGBTQ+', 'Multi POV', 'Standalone'],
    content_warnings: ['SA', 'DV', 'On-page homophobia']
  }
];

/*
function currentSlide(n) {
  showSlides(slideIndex = n);
}*/


function setUpPopSlides() {
    const popularBooks = popularBooksCurrent;

    const popularBooksSlides = document.createElement('div');
    popularBooksSlides.classList.add('slideshow_container');

    const prevPopBtn = document.createElement('a');
    prevPopBtn.classList.add('prev');
    prevPopBtn.onclick = function () {
        showPopSlides(slidePopIndex += -1);
    };
    prevPopBtn.textContent = '<';
    popularSlideshow.appendChild(prevPopBtn);

    for(let i = 0; i < popularBooks.length; i=i+3){
        const popBook = document.createElement('div');
        popBook.classList.add('popular_slide');

        for(let j = i; j < i+3; j++){
            const goToBook = document.createElement('form');
            goToBook.method = 'get';
            goToBook.action = 'displaybook.html';       //this will be displaybook.php later
            const isbn = document.createElement('input');
            isbn.type = 'hidden';
            isbn.name = 'isbn';
            isbn.value = popularBooks[j].isbn;
            goToBook.appendChild(isbn);

            const popBookBtn = document.createElement('button');
            popBookBtn.type = 'submit';
            const popBookCover = document.createElement('img');
            popBookCover.classList.add('bookcover');
            popBookCover.src = 'bookcovers/' + popularBooks[j].isbn + '.jpg';
            popBookBtn.appendChild(popBookCover);

            goToBook.appendChild(popBookBtn);

            popBook.appendChild(goToBook);
        }
        
        popularBooksSlides.appendChild(popBook);
    }

    const nextPopBtn = document.createElement('a');
    nextPopBtn.classList.add('next');
    nextPopBtn.onclick = function () {
        showPopSlides(slidePopIndex += 1);
    };
    nextPopBtn.textContent = '>';
    popularSlideshow.appendChild(nextPopBtn);

    popularSlideshow.appendChild(popularBooksSlides);
}


function setUpNewSlides() {
    const newBooks = popularBooksCurrent;

    const newBooksSlides = document.createElement('div');
    newBooksSlides.classList.add('slideshow_container');

    const prevNewBtn = document.createElement('a');
    prevNewBtn.classList.add('prev');
    prevNewBtn.onclick = function () {
        showNewSlides(slideNewIndex += -1);
    };
    prevNewBtn.textContent = '<';
    newSlideshow.appendChild(prevNewBtn);

    const nextNewBtn = document.createElement('a');
    nextNewBtn.classList.add('next');
    nextNewBtn.onclick = function () {
        showNewSlides(slideNewIndex += 1);
    };
    nextNewBtn.textContent = '>';
    newSlideshow.appendChild(nextNewBtn);

    for(let i = 0; i < newBooks.length; i=i+3){
        const newBook = document.createElement('div');
        newBook.classList.add('new_slide');

        for(let j = i; j < i+3; j++){
            const goToBook = document.createElement('form');
            goToBook.method = 'get';
            goToBook.action = 'displaybook.html';       //this will be displaybook.php later
            const isbn = document.createElement('input');
            isbn.type = 'hidden';
            isbn.name = 'isbn';
            isbn.value = newBooks[j].isbn;
            goToBook.appendChild(isbn);

            const newBookBtn = document.createElement('button');
            newBookBtn.type = 'submit';
            const newBookCover = document.createElement('img');
            newBookCover.classList.add('bookcover');
            newBookCover.src = 'bookcovers/' + newBooks[j].isbn + '.jpg';
            newBookBtn.appendChild(newBookCover);

            goToBook.appendChild(newBookBtn);

            newBook.appendChild(goToBook);
        }
        newBooksSlides.appendChild(newBook);
    }
    newSlideshow.appendChild(newBooksSlides);
}

function setUpChildSlides() {
    const childBooks = popularBooksCurrent;

    const childBooksSlides = document.createElement('div');
    childBooksSlides.classList.add('slideshow_container');

    const prevChildBtn = document.createElement('a');
    prevChildBtn.classList.add('prev');
    prevChildBtn.onclick = function () {
        showChildSlides(slideChildIndex += -1);
    };
    prevChildBtn.textContent = '<';
    childrensSlideshow.appendChild(prevChildBtn);

    const nextChildBtn = document.createElement('a');
    nextChildBtn.classList.add('next');
    nextChildBtn.onclick = function () {
        showChildSlides(slideChildIndex += 1);
    };
    nextChildBtn.textContent = '>';
    childrensSlideshow.appendChild(nextChildBtn);

    for(let i = 0; i < childBooks.length; i=i+3){
        const childBook = document.createElement('div');
        childBook.classList.add('childrens_slide');

        for(let j = i; j < i+3; j++){
            const goToBook = document.createElement('form');
            goToBook.method = 'get';
            goToBook.action = 'displaybook.html';       //this will be displaybook.php later
            const isbn = document.createElement('input');
            isbn.type = 'hidden';
            isbn.name = 'isbn';
            isbn.value = childBooks[j].isbn;
            goToBook.appendChild(isbn);

            const childBookBtn = document.createElement('button');
            childBookBtn.type = 'submit';
            const childBookCover = document.createElement('img');
            childBookCover.classList.add('bookcover');
            childBookCover.src = 'bookcovers/' + childBooks[j].isbn + '.jpg';
            childBookBtn.appendChild(childBookCover);

            goToBook.appendChild(childBookBtn);

            childBook.appendChild(goToBook);
        }
        childBooksSlides.appendChild(childBook);
    }
    childrensSlideshow.appendChild(childBooksSlides);
}

function setUpAcademicSlides() {
    const acaBooks = popularBooksCurrent;

    const acaBooksSlides = document.createElement('div');
    acaBooksSlides.classList.add('slideshow_container');

    const prevAcaBtn = document.createElement('a');
    prevAcaBtn.classList.add('prev');
    prevAcaBtn.onclick = function () {
        showAcademicSlides(slideAcademicIndex += -1);
    };
    prevAcaBtn.textContent = '<';
    academicSlideshow.appendChild(prevAcaBtn);

    const nextAcaBtn = document.createElement('a');
    nextAcaBtn.classList.add('next');
    nextAcaBtn.onclick = function () {
        showAcademicSlides(slideAcademicIndex += 1);
    };
    nextAcaBtn.textContent = '>';
    academicSlideshow.appendChild(nextAcaBtn);

    for(let i = 0; i < acaBooks.length; i=i+3){
        const acaBook = document.createElement('div');
        acaBook.classList.add('academic_slide');

        for(let j = i; j < i+3; j++){
            const goToBook = document.createElement('form');
            goToBook.method = 'get';
            goToBook.action = 'displaybook.html';       //this will be displaybook.php later
            const isbn = document.createElement('input');
            isbn.type = 'hidden';
            isbn.name = 'isbn';
            isbn.value = acaBooks[j].isbn;
            goToBook.appendChild(isbn);

            const acaBookBtn = document.createElement('button');
            acaBookBtn.type = 'submit';
            const acaBookCover = document.createElement('img');
            acaBookCover.classList.add('bookcover');
            acaBookCover.src = 'bookcovers/' + acaBooks[j].isbn + '.jpg';
            acaBookBtn.appendChild(acaBookCover);

            goToBook.appendChild(acaBookBtn);

            acaBook.appendChild(goToBook);
        }
        acaBooksSlides.appendChild(acaBook);
    }
    academicSlideshow.appendChild(acaBooksSlides);
}

function showPopSlides(n){
    let popSlides = document.getElementsByClassName('popular_slide');
    if (n > popSlides.length) {slidePopIndex = 1}
    if (n < 1) {slidePopIndex = popSlides.length}
    for (let i = 0; i < popSlides.length; i++) {
        popSlides[i].style.display = "none";
    }
    popSlides[slidePopIndex-1].style.display = 'flex';
}

function showNewSlides(n){
    let newSlides = document.getElementsByClassName('new_slide');
    if (n > newSlides.length) {slideNewIndex = 1}
    if (n < 1) {slideNewIndex = newSlides.length}
    for (let i = 0; i < newSlides.length; i++) {
        newSlides[i].style.display = "none";
    }
    newSlides[slideNewIndex-1].style.display = 'flex';
}

function showChildSlides(n){
    let childSlides = document.getElementsByClassName('childrens_slide');
    if (n > childSlides.length) {slideChildIndex = 1}
    if (n < 1) {slideChildIndex = childSlides.length}
    for (let i = 0; i < childSlides.length; i++) {
        childSlides[i].style.display = "none";
    }
    childSlides[slideChildIndex-1].style.display = 'flex';
}

function showAcademicSlides(n){
    let acaSlides = document.getElementsByClassName('academic_slide');
    if (n > acaSlides.length) {slideAcademicIndex = 1}
    if (n < 1) {slideAcademicIndex = acaSlides.length}
    for (let i = 0; i < acaSlides.length; i++) {
        acaSlides[i].style.display = "none";
    }
    acaSlides[slideAcademicIndex-1].style.display = 'flex';
}

function setUpSlides(){
    setUpPopSlides();
    setUpNewSlides();
    setUpChildSlides();
    setUpAcademicSlides();
}

function showSlides(n){
    showPopSlides(n);
    showNewSlides(n);
    showChildSlides(n);
    showAcademicSlides(n);
}





let slidePopIndex = 1;
let slideNewIndex = 1;
let slideChildIndex = 1;
let slideAcademicIndex = 1;
setUpSlides();
showSlides(1);





