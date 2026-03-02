const prevTopBtn = document.getElementById('prev_top');
const nextTopBtn = document.getElementById('next_top');
const numDisplayedTop = document.getElementById('num_displayed_top');
const numResultsTop = document.getElementById('num_results_top');

const pageBtnsTop = document.querySelector('.page_buttons_top');

const prevBottomBtn = document.getElementById('prev_bottom');
const nextBottomBtn = document.getElementById('next_bottom');
const numDisplayedBottom = document.getElementById('num_displayed_bottom');
const numResultsBottom = document.getElementById('num_results_bottom');

const pageBtnsBottom = document.querySelector('.page_buttons_bottom');

const searchResults = document.querySelector('.search_results');


prevTopBtn.disabled = false;
prevBottomBtn.disabled = false;
nextTopBtn.disabled = false;
nextBottomBtn.disabled = false;



const matchingBooks = [
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
  }
];


//Helper functions

function trimDescription(longForm){
    return longForm.slice(0, 500) + "...";
}

function validDateFormat(dateString){     //check that a string for a date is actually YYYY-MM-DD
    const pattern = /^\d{4}-\d{2}-\d{2}$/;      //basic dddd-dd-dd format
  if(!pattern.test(dateString)){ //check that matches regex
	return false;
  } else {
  	return true;
  }
}

function validMonthInDate(dateString){     //ensures month is between 01-12 in a YYYY-MM-DD date string
    const pattern = /^\d{4}-(1[0-2]|0[1-9])-\d{2}$/;     
  if(!pattern.test(dateString)){ //check that matches regex
	return false;
  } else {
  	return true;
  }
}

function singleDigitDay(dateString){     //checks if the day of a date (in YYYY-MM-DD format) only has one digit
    const pattern = /^\d{4}-\d{2}-0[1-9]$/;
  if(!pattern.test(dateString)){ //check that matches regex
	return false;
  } else {
  	return true;
  }
}


function monthInWords(numberedDate){        //no leading zero on days 1-9
    //takes in a string that has a date in format YYYY-MM-DD and produces string with format DD MonthName YYYY
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if(validDateFormat(numberedDate)){
        if(validMonthInDate(numberedDate)){
            if(singleDigitDay(numberedDate)){
                return numberedDate.slice(9, 10) + ' ' + monthNames[numberedDate.slice(5, 7)-1] + ' ' + numberedDate.slice(0, 4);
            } else {
                return numberedDate.slice(8, 10) + ' ' + monthNames[numberedDate.slice(5, 7)-1] + ' ' + numberedDate.slice(0, 4);
            }
        } else {
            return 'Invalid month value';
        }
    } else {
        return numberedDate + ' is not in format YYYY-MM-DD';
    }
}

/*
function monthInWords(numberedDate){ //keeps leading 0 on days 1-9 (for formatting)
    //takes in a string that has a date in format YYYY-MM-DD and produces string with format DD MonthName YYYY
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if(validDateFormat(numberedDate)){
        if(validMonthInDate(numberedDate)){
            return numberedDate.slice(8, 10) + ' ' + monthNames[numberedDate.slice(5, 7)-1] + ' ' + numberedDate.slice(0, 4);
        } else {
            return 'Invalid month value';
        }
    } else {
        return numberedDate + ' is not in format YYYY-MM-DD';
    }
}
*/


function arrayAsString(inputList){
    let outputString = '';
    for(let i = 0; i < inputList.length; i++){
        if(i == inputList.length - 1){
            outputString = outputString + inputList[i];
        } else {
            outputString = outputString + inputList[i] + ', ';
        }
    }
    return outputString;
}

function infoPresent(inputString){  //checks if there is actually content in a string
    if(inputString == ''){
        return 'N/A';
    } else {
        return inputString;
    }
}




//Main functionality

let currentResultsPage;
let numResults;
let spillOver;
let numPages;

function setUpPage(){

    currentResultsPage = 1;

    numResults = matchingBooks.length;
    spillOver = numResults%10;
    numPages = parseInt(numResults/10);
    if(spillOver != 0) {
        numPages++;
    }

    let currPageNum = 1;

    while(currPageNum <= numPages){

        const pageNumber = currPageNum; // freeze value so it can be used in event

        const pageNumBtn = document.createElement('button');
        pageNumBtn.id = 'page_' + pageNumber;
        pageNumBtn.textContent = pageNumber;

        pageNumBtn.addEventListener('click', () => {
            currentResultsPage = pageNumber;
            setUpButtons();
            populateResults();
        });

        pageBtnsTop.appendChild(pageNumBtn);
        currPageNum++;
    }
    numResultsTop.textContent = numResults + ' results';


    currPageNum = 1;
    while(currPageNum <= numPages){

        const pageNumber = currPageNum; // freeze value so it can be used in event

        const pageNumBtn = document.createElement('button');
        pageNumBtn.id = 'page_' + pageNumber;
        pageNumBtn.textContent = pageNumber;

        pageNumBtn.addEventListener('click', () => {
            currentResultsPage = currPageNum;
            setUpButtons();
            populateResults();
        });

        pageBtnsBottom.appendChild(pageNumBtn);
        currPageNum++;
    }
    numResultsBottom.textContent = numResults + ' results';


    setUpButtons();
    populateResults();
}

function setUpButtons(){
    if(currentResultsPage == 1){
        prevTopBtn.disabled = true;
        prevBottomBtn.disabled = true;
    } else  {
        prevTopBtn.disabled = false;
        prevBottomBtn.disabled = false;
    }
    if(currentResultsPage == numPages){
        nextTopBtn.disabled = true;
        nextBottomBtn.disabled = true;
    } else {
        nextTopBtn.disabled = false;
        nextBottomBtn.disabled = false;
    }
}

function addSearchResult(resultNum){
    const currentBook = matchingBooks[resultNum];

    const newResult = document.createElement('section');
    newResult.classList.add('search_result_book');

    const coverImage = document.createElement('div');
    coverImage.classList.add('coverimage');
    const cover = document.createElement('img');
    cover.src = 'bookcovers/' + currentBook.isbn + '.jpg';
    coverImage.appendChild(cover);
    newResult.appendChild(coverImage);


    const basicDetails = document.createElement('div');
    basicDetails.classList.add('basicdetails');

    const title = document.createElement('h3');
    title.textContent = currentBook.title;
    basicDetails.appendChild(title);

    const author = document.createElement('h4');
    author.textContent = currentBook.author;
    basicDetails.appendChild(author);

    const description = document.createElement('p');
    description.textContent = trimDescription(currentBook.description);
    basicDetails.appendChild(description);

    newResult.appendChild(basicDetails);


    const adminDetails = document.createElement('div');
    adminDetails.classList.add('admindetails');

    const date_published = document.createElement('p');
    date_published.textContent = 'Published: ' + monthInWords(currentBook.date_published);
    adminDetails.appendChild(date_published);

    const language = document.createElement('p');
    language.textContent = 'Language: ' + currentBook.language;
    adminDetails.appendChild(language);

    const num_pages = document.createElement('p');
    num_pages.textContent = 'Pages: ' + currentBook.num_pages;
    adminDetails.appendChild(num_pages);

    newResult.appendChild(adminDetails);


    const genreDetails = document.createElement('div');
    genreDetails.classList.add('genredetails');

    const fiction = document.createElement('p');
    fiction.textContent = currentBook.fiction;
    genreDetails.appendChild(fiction);

    const genres = document.createElement('p');
    genres.textContent = arrayAsString(currentBook.genres);
    genreDetails.appendChild(genres);

    newResult.appendChild(genreDetails);


    const contentDetails = document.createElement('div');
    contentDetails.classList.add('contentdetails');

    const tropes = document.createElement('p');
    tropes.textContent = 'Tropes: ' + infoPresent(arrayAsString(currentBook.tropes));
    contentDetails.appendChild(tropes);

    
    const features = document.createElement('p');
    features.textContent = 'Features: ' + infoPresent(arrayAsString(currentBook.features));
    contentDetails.appendChild(features);

    const content_warnings = document.createElement('p');
    content_warnings.textContent = 'Content Warnings: ' + infoPresent(arrayAsString(currentBook.content_warnings));
    contentDetails.appendChild(content_warnings);

    newResult.appendChild(contentDetails);


    const goToBook = document.createElement('form');
    goToBook.method = 'get';
    goToBook.action = 'displaybook.html';       //this will be displaybook.php later

    const isbn = document.createElement('input');
    isbn.type = 'hidden';
    isbn.name = 'isbn';
    isbn.value = currentBook.isbn;

    goToBook.appendChild(isbn);

    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.type = 'submit';
    seeMoreBtn.textContent = 'See More';

    goToBook.appendChild(seeMoreBtn);


    newResult.appendChild(goToBook);


    searchResults.appendChild(newResult);
}

/*
isbn: "",
    title: "",
    author: "",
    description: "",
    date_published: "",
    language: "",
    num_pages: 420,
    fiction: "",
    genres: [],
    tropes: [],
    features: [],
    content_warnings: []
    */

function populateResults(){

    searchResults.innerHTML = '';

    let startIndex = (currentResultsPage-1)*10;
    let endIndex = startIndex + 9;
    if(currentResultsPage == numPages){
        endIndex = numResults - 1;
    }

    numDisplayedTop.textContent = 'Showing ' + (startIndex+1) + '-' + (endIndex+1) + ' of';
    numDisplayedBottom.textContent = 'Showing ' + (startIndex+1) + '-' + (endIndex+1) + ' of';
    for(let i = startIndex; i <= endIndex; i++){
        addSearchResult(i);
    }  
}


nextTopBtn.addEventListener('click', () => { //this will move user to next calendar period
  currentResultsPage++;
  setUpButtons();
  populateResults();
});

nextBottomBtn.addEventListener('click', () => { //this will move user to next calendar period
  currentResultsPage++;
  setUpButtons();
  populateResults();
});

prevTopBtn.addEventListener('click', () => { //this will move user to next calendar period
  currentResultsPage--;
  setUpButtons();
  populateResults();
});

prevBottomBtn.addEventListener('click', () => { //this will move user to next calendar period
  currentResultsPage--;
  setUpButtons();
  populateResults();
});

setUpPage();