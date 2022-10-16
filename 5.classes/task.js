class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state (num) {
            if(num > 0) this._state = 0;
            if(num < 100) this._state = 100; 
            
            this._state = num;
    }

    get state () {
        return this._state;
    }
}   

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {this.books.push(book)};
    }

    findBookBy(type, value) {
        this.books.find((type, value) => book[type] === value);
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.bookName === bookName);
        return this.books.splice(index, 1)[0];
    }
}

class Student {
    constructor (name, gender, age, subjectName) {
        this.name = name;
        this. gender = gender;
        this. age = age;
        this.subjectName = subjectName;
    }

    addMark(mark, subjectName) {
        if (mark >= 1 && mark <= 5 && subjectName === undefined) {
            this.subjectName = [];
        } else {
            this.subjectName.push(mark);
        }
    }

    getAverageBySubject(subjectName, marks) {
        let sum = 0;
        for(let i = 0; i < this.marks.length; i++) {
          sum += this.marks[i];
        }

        return sum / this.marks.length;
    }

    getAverage(...marks) {
        let sum = 0;
        for(let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
    }
  
    return sum / this.marks.length;
  }

  exclude(reason) {
    if (mark < 1 && mark > 5){
        delete this.subjectName;
        delete this.marks;
        this.excluded = reason;
    }
  }
}