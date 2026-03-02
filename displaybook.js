const titleTitle = document.getElementById('title_title');
const titleHeading = document.getElementById('title_heading');

const displayBook = document.querySelector('.book_display');
const displayRatings = document.querySelector('.rating_display');
const displaySimilar = document.querySelector('.similar_books');

const bookInfo = 
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
    content_warnings: [],
  };

const allReviews = [
    {
        isbn: '9780007443499',
        username: 'GIGO',
        date_submitted: '2025-08-19',
        rating: 4,
        title: 'Interesting take on a futuristic society',
        review: 'Found the worldbuilding fasinating - its a dystopia but only for a small percentage of the population'
    },
    {
        isbn: '9780007443499',
        username: 'Bubbles',
        date_submitted: '2025-02-03',
        rating: 5,
        title: 'LOVE IT',
        review: 'All time favourite book'
    },
    {
        isbn: '9780007443499',
        username: 'Username',
        date_submitted: '2025-01-07',
        rating: 4.5,
        title: 'Review title',
        review: 'Review content here'
    },
    {
        isbn: '9780007443499',
        username: 'AngryFish',
        date_submitted: '2024-11-23',
        rating: 2,
        title: 'Not my cup of tea',
        review: 'Found the main character kinda annoying, plot was decent but I just couldnt enjoy it cause of the mc'
    },
    {
        isbn: '9780007443499',
        username: 'GentleReader',
        date_submitted: '2020-06-27',
        rating: 3.5,
        title: 'Pretty good',
        review: 'Pretty good, kept me entertained during lockdown'
    }
];


const recommendedBooks = [
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
function trimDescription(longForm){
    return longForm.slice(0, 500) + "...";
}*/

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

/*
function ratingAsStars(numRating){
    let outputString = '';
    for(let i = 0; i < numRating; i++){
        outputString += '\u2605';
    }
    for(let i = 0; i < 5-numRating; i++){
        outputString += '\u2606';
    }
    return outputString;
}
*/

function ratingAsStars(numRating){
    let outputString = '';
    for(let i = 0; i < Math.floor(numRating); i++){
        outputString += '\u2605';
    }
    if(numRating%1 != 0){
        outputString += '\u2BEA';
    }
    for(let i = 0; i < Math.floor(5-numRating); i++){
        outputString += '\u2606';
    }
    return outputString;
}

function averageRatingRounded(numRating){       //rounds a float to the nearest .5
    let outputRating = numRating;
    if(numRating % 1 != 0){
        let baseline = Math.floor(numRating);
        let deciSpill = numRating - baseline;
        if(deciSpill < 0.25){
            outputRating = baseline;
        } else if(deciSpill < 0.75){
            outputRating = baseline + 0.5;
        } else {
            outputRating = baseline + 1;
        }
    }
    return outputRating;
}

function setUpBookDisplay(){
    const currentBook = bookInfo;

    titleTitle.textContent = bookInfo.title + ' - Giant Library';
    titleHeading.textContent = bookInfo.title;

    const newBook = document.createElement('section');
    newBook.classList.add('book_details');

    const coverImage = document.createElement('div');
    coverImage.classList.add('coverimage');
    const cover = document.createElement('img');
    cover.src = 'bookcovers/' + currentBook.isbn + '.jpg';
    coverImage.appendChild(cover);
    newBook.appendChild(coverImage);


    const basicDetails = document.createElement('div');
    basicDetails.classList.add('basicdetails');

    const title = document.createElement('h3');
    title.textContent = currentBook.title;
    basicDetails.appendChild(title);

    const author = document.createElement('h4');
    author.textContent = currentBook.author;
    basicDetails.appendChild(author);

    const description = document.createElement('p');
    description.textContent = currentBook.description;
    basicDetails.appendChild(description);

    newBook.appendChild(basicDetails);


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

    const isbn = document.createElement('p');
    isbn.textContent = 'ISBN: ' + currentBook.isbn;
    adminDetails.appendChild(isbn);

    newBook.appendChild(adminDetails);


    const genreDetails = document.createElement('div');
    genreDetails.classList.add('genredetails');

    const fiction = document.createElement('p');
    fiction.textContent = currentBook.fiction;
    genreDetails.appendChild(fiction);

    const genres = document.createElement('p');
    genres.textContent = arrayAsString(currentBook.genres);
    genreDetails.appendChild(genres);

    newBook.appendChild(genreDetails);


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

    newBook.appendChild(contentDetails);

    displayBook.appendChild(newBook);

    
}

function setUpRatingDisplay(){
    const bookReviews = allReviews;

    const ratingDetails = document.createElement('section');
    ratingDetails.classList.add('rating_details');
    
    const rating = document.createElement('h3');

    if(bookReviews.length == 0){
        rating.textContent = 'No reviews yet';
        ratingDetails.appendChild(rating);
    } else {
        const reviewSection = document.createElement('div');
        reviewSection.classList.add('review_section');

        let averageRating = 0;

        for(let i = 0; i < bookReviews.length; i++){
            const newReview = document.createElement('div');
            newReview.classList.add('review');

            const starRating = document.createElement('h4');
            starRating.textContent = ratingAsStars(bookReviews[i].rating);
            newReview.appendChild(starRating);

            const title = document.createElement('h4');
            title.textContent = bookReviews[i].title;
            newReview.appendChild(title);

            const username = document.createElement('h5');
            username.textContent = bookReviews[i].username;
            newReview.appendChild(username);

            const dateOfReview = document.createElement('h5');
            dateOfReview.textContent = monthInWords(bookReviews[i].date_submitted);
            newReview.appendChild(dateOfReview);

            const reviewContent = document.createElement('p');
            reviewContent.textContent = bookReviews[i].review;
            newReview.appendChild(reviewContent);

            averageRating += bookReviews[i].rating;

            reviewSection.appendChild(newReview);
        }

        averageRating = averageRatingRounded(averageRating/bookReviews.length);

        rating.textContent = 'Rating: ' + ratingAsStars(averageRating) + ' (' + averageRating + '/5 stars)';
        ratingDetails.appendChild(rating);
        ratingDetails.appendChild(reviewSection);
    }

    displayRatings.appendChild(ratingDetails);
}

function setUpSimilarRecommends(){
    const similarBooks = recommendedBooks;

    for(let i = 0; i < similarBooks.length; i++){
        const newRec = document.createElement('div');
        newRec.classList.add('bookrec');

        const goToBook = document.createElement('form');
        goToBook.method = 'get';
        goToBook.action = 'displaybook.html';       //this will be displaybook.php later

        const isbn = document.createElement('input');
        isbn.type = 'hidden';
        isbn.name = 'isbn';
        isbn.value = similarBooks[i].isbn;

        goToBook.appendChild(isbn);

        const bookRecBtn = document.createElement('button');
        bookRecBtn.type = 'submit';
        //bookRecBtn.textContent = 'See More';

        const recCover = document.createElement('img');
        recCover.src = 'bookcovers/' + similarBooks[i].isbn + '.jpg';

        bookRecBtn.appendChild(recCover);

        goToBook.appendChild(bookRecBtn);

        newRec.appendChild(goToBook);
        displaySimilar.appendChild(newRec);
    }

}

/*<div class="similar_books">
		<h3>More like this:</h3>

		<div class="bookrec"><img src="bookcovers/no_cover_available.jpg"></img></div>
		<div class="bookrec"><img src="bookcovers/no_cover_available.jpg"></img></div>
		<div class="bookrec"><img src="bookcovers/no_cover_available.jpg"></img></div>
		<div class="bookrec"><img src="bookcovers/no_cover_available.jpg"></img></div>
		<div class="bookrec"><img src="bookcovers/no_cover_available.jpg"></img></div>
		</div>*/

setUpBookDisplay();
setUpRatingDisplay();
setUpSimilarRecommends();

function testHelperFunctions(){
    const testingField1 = document.createElement('p');
    const testingField2 = document.createElement('p');
    const testingField3 = document.createElement('p');
    const testingField4 = document.createElement('p');

    //testing averageRatingRounded()        
    /*
    testingField1.textContent = 'Testing: averageRatingRounded() \t Input: 2.03 \t Expected output: 2 \t Output: ' + averageRatingRounded(2.03);
    testingField2.textContent = 'Testing: averageRatingRounded() \t Input: 2.30 \t Expected output: 2.5 \t Output: ' + averageRatingRounded(2.30);
    testingField3.textContent = 'Testing: averageRatingRounded() \t Input: 2.63 \t Expected output: 2.5 \t Output: ' + averageRatingRounded(2.63);
    testingField4.textContent = 'Testing: averageRatingRounded() \t Input: 2.84 \t Expected output: 3 \t Output: ' + averageRatingRounded(2.84);
    */

    //testing ratingAsStars()        
    /*
    testingField1.textContent = 'Testing: ratingAsStars() \t Input: 4.5 \t Expected output: \u2605\u2605\u2605\u2605\u2BEA \t Output: ' + ratingAsStars(4.5);
    testingField2.textContent = 'Testing: ratingAsStars() \t Input: 2.5 \t Expected output: \u2605\u2605 \u2BEA \u2606\u2606 \t Output: ' + ratingAsStars(2.5);
    testingField3.textContent = 'Testing: ratingAsStars() \t Input: 3 \t Expected output: \u2605\u2605\u2605\u2606\u2606\t Output: ' + ratingAsStars(3);
    testingField4.textContent = 'Testing: ratingAsStars() \t Input: 0.5 \t Expected output: \u2BEA\u2606\u2606\u2606\u2606 \t Output: ' + ratingAsStars(0.5);
    */

    displayBook.appendChild(testingField1);
    displayBook.appendChild(testingField2);
    displayBook.appendChild(testingField3);
    displayBook.appendChild(testingField4);

}

//testHelperFunctions();