// validation for ISBN code
function validate_isbn(isbn_query) {
    const pattern = /^\d{9}[\dX]$/;
    if (!pattern.test(isbn_query)) {
        return false;
    } else {
        return true;
    }
}

// validation for date (4-digit year)
function validate_date(date) {
    const pattern = /^\d{4}$/;
    if (!pattern.test(date)) {
        return false;
    } else {
        return true;
    }
}

// function to trim the title of the book
function trim_title(title) {
    const trimmed_title = title.trim();
    return trimmed_title;
}

// function to trim the author of the book
function trim_author(author) {
    const trimmed_author = author.trim();
    return trimmed_author;
}

//validation to the form on submit
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("advancedsearch_form");

    form.addEventListener("submit", function (e) {
        let valid = true;

        // ISBN validation
        const isbnInput = document.getElementById("isbn_query");
        const isbnError = document.getElementById("isbn_error");
        const isbnValue = isbnInput.value.trim();

        if (isbnValue !== "" && !validate_isbn(isbnValue)) {
            isbnError.textContent = "ISBN must be 9 digits followed by a digit or 'X' (e.g. 123456789X).";
            isbnError.style.color = "red";
            valid = false;
        } else {
            isbnError.textContent = "";
        }

        // Published after/before validation
        const pubAfter = document.getElementById("pub_after_query").value;
        const pubBefore = document.getElementById("pub_before_query").value;
        const pubBeforeError = document.getElementById("pub_before_error");

        if (pubAfter !== "" && !validate_date(pubAfter)) {
            pubBeforeError.textContent = "Please enter a valid 4-digit year for 'Published after'.";
            pubBeforeError.style.color = "red";
            valid = false;
        } else if (pubBefore !== "" && !validate_date(pubBefore)) {
            pubBeforeError.textContent = "Please enter a valid 4-digit year for 'Published before'.";
            pubBeforeError.style.color = "red";
            valid = false;
        } else if (pubAfter !== "" && pubBefore !== "" && parseInt(pubBefore) <= parseInt(pubAfter)) {
            pubBeforeError.textContent = "'Published before' must be later than 'Published after'.";
            pubBeforeError.style.color = "red";
            valid = false;
        } else {
            pubBeforeError.textContent = "";
        }

        // trimmed title and author
        const titleInput = document.getElementById("title_query");
        titleInput.value = trim_title(titleInput.value);

        const authorInput = document.getElementById("author_query");
        authorInput.value = trim_author(authorInput.value);

        if (!valid) {
            e.preventDefault();  // stop form submission if invalid
        }
    });
});
