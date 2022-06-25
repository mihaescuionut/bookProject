import Api from "./api.js";

export class Home {
  constructor() {
    this.viewHome();
    this.getBookForPopulate();
    this.deleteBook();
    this.sortFunction();
    this.editBook();

    this.searchInput = document.querySelector("#search-input");
    this.searchInput.addEventListener("input", this.searchFunction);
  } 

  viewHome = () => {
    let container = document.querySelector(".con");
    console.log(container);

    container.innerHTML = `
        
        <!-- Nav Container -->
        <nav class="relative container mx-auto p-6">
          <!-- Flex Container For All Items -->
          <div class="flex items-center justify-between">
            <!-- Flex Container For Logo/Menu -->
            <div class="flex items-center space-x-20">
              <!-- Logo -->
              <img class="h-20" src="https://thumbs.dreamstime.com/b/blue-book-logo-icon-design-unique-fashion-color-company-brand-unique-blue-book-logo-icon-design-175088023.jpg alt="" />
              <!-- Left Menu -->
              <div class="hidden space-x-8 font-bold lg:flex">
                <a href="#" class="text-grayishViolet hover:text-veryDarkViolet"
                  >Features</a>
                <a href="#" class="text-grayishViolet hover:text-veryDarkViolet"
                  >Pricing</a>
                <a href="#" class="text-grayishViolet hover:text-veryDarkViolet"
                  >Resources</a>
              </div>
            </div>
    
            <!-- Right Buttons Menu -->
            <div
              class="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex"
            >
              <div class="hover:text-veryDarkViolet">Login</div>
              <a
                href="#"
                class="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
                >Sign Up</a
              >
            </div>
    
            <!-- Hamburger Button -->
            <button
              id="menu-btn"
              class="block hamburger lg:hidden focus:outline-none"
              type="button"
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
    
          <!-- Mobile Menu -->
          <div
            id="menu"
            class="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
          >
            <div
              class="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm"
            >
              <a href="#" class="w-full text-center hover:text-veryDarkViolet duration-500">Features</a>
              <a href="#" class="w-full text-center hover:text-veryDarkViolet duration-500">Pricing</a>
              <a href="#" class="w-full text-center hover:text-veryDarkViolet duration-500">Resources</a>
              <a href="#" class="w-full pt-6 border-t border-gray-400 text-center hover:text-veryDarkViolet duration-500"
                >Login</a
              >
              <a href="#" class="w-full py-3 text-center rounded-full bg-cyan"
                >Sign Up</a
              >
            </div>
          </div>
        </nav>
    
        <!-- Hero Section -->
        <section id="hero">
          <!-- Hero Container -->
          <div class="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            <!-- Content Container -->
            <div class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 class="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                More than just books
              </h1>
              <p class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                Build your brand's recognition and get detailed insights on how your
                books are performing.
              </p>
              <div class="mx-auto lg:mx-0">
                <a href="#" class="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">Get Started</a>
              </div>
            </div>
    
            <!-- Image -->
            <div class="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
              <img src="images/illustration-working.svg" alt="" />
            </div>
          </div>
        </section>
    
        <!-- book Section -->
        <section id="shorten" class="relative bg-gray-100">
          <!-- book Container -->
          <div class="max-w-4xl mx-auto p-6 space-y-6">
            <!-- Form -->
            <form
              id="search-form"
              class="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
              <input type="text" class="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none" placeholder="Search for a book here" id="search-input"/>
    
              <button
                class="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2" id="search-btn">Search
              </button>
    
              <!-- Error Message -->
              <div
                id="err-msg"
                class="absolute left-7 bottom-3 text-red text-sm italic"
              ></div>
            </form>

            <!-- sort div -->

            <div class="flex justify-center items-center w-full bg-gray-100 gap-2">
              <label class="font-bold" for="sort">Sort by</label>
              <select class="bg-cyan-300 font-bold rounded-lg w-40 text-center" id="sort">
                <option value="Name">Name</option>
                <option value="Year">Year</option>
                <option value="Stock">Stock</option>
              </select>
            </div>

            <!-- books div --> 

            <div class="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3 bookPop">

               <!-- book 1 -->
            <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
    
              <div class="grid grid-cols-1 items-center justify-between w-full p-6 md:flex-col">
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Title
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Author
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Genre
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Year
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Stock
                </p>
              </div>
              
    
              <div class="flex flex-row items-center justify-center space-x-4 w-50 md:flex md:flex-col md:space-x-0 md:space-y-3">
                <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
    
                <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </div>
            </div>
    
            <!-- Book 2 -->
            <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
    
              <div class="grid grid-cols-3 items-center justify-between w-full p-6 md:flex-col">
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Title
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Author
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Genre
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Year
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Stock
                </p>
              </div>
    
              <div class="flex flex-row items-center justify-center space-x-4 w-50 md:flex md:flex-col md:space-x-0 md:space-y-3">
                <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
    
                <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </div>
            </div>
    
            <!-- Book 3 -->
            <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
              <div class="grid grid-cols-3 items-center justify-between w-full p-6 md:flex-col">
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Title
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Author
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Genre
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Year
                </p>
                <p class="font-bold text-center text-veryDarkViolet md:text-left">
                  Stock
                </p>
              </div>
    
              <div class="flex flex-row items-center justify-center space-x-4 w-50 md:flex md:flex-col md:space-x-0 md:space-y-3">
                <button  class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
    
                <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </div>
            </div>
            </div>
           
          </div>
        </section>
    
        <!-- Stats Section -->
        <section id="stats" class="py-24 bg-gray-100">
          <div class="container mx-auto px-3">
            <h2 class="text-4xl mb-6 font-bold text-center">All your books, here!</h2>
            <p class="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
              You can read them anywhere on your device! <br>
              You can also set reminders for reading everyday!
            </p>
          </div>
        </section>
    
        <!-- Feature Box Section -->
        <section id="features" class="pb-32 bg-gray-100">
          <div
            class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7"
          >
            <!-- Horizontal Line -->
            <div
              class="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"
            ></div>
            <!-- Vertical Line -->
            <div class="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
    
            <!-- Box 1 -->
            <div
              class="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3"
            >
              <!-- Image Positioning -->
              <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <!-- Image Container For Background & Center -->
                <div
                  class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet"
                >
                  <img src="images/icon-brand-recognition.svg" alt="" />
                </div>
              </div>
              <h5
                class="pt-6 text-xl font-bold text-center capitalize md:text-left"
              >
                Brand Recognition
              </h5>
              <p class="text-center text-gray-400 md:text-left">
                Boost your brand recognition with each book. Generic book don't
                mean a thing. Branded book help instil confidence in your content.
              </p>
            </div>
    
            <!-- Box 2 -->
            <div
              class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3"
            >
              <!-- Image Positioning -->
              <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <!-- Image Container For Background & Center -->
                <div
                  class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet"
                >
                  <img src="images/icon-detailed-records.svg" alt="" />
                </div>
              </div>
              <h5
                class="pt-6 text-xl font-bold text-center capitalize md:text-left"
              >
                Detailed records
              </h5>
              <p class="text-center text-gray-400 md:text-left">
                Gain insights into your books. Reading engage with your content helps inform better decisions.
              </p>
            </div>
    
            <!-- Box 3 -->
            <div
              class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3"
            >
              <!-- Image Positioning -->
              <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <!-- Image Container For Background & Center -->
                <div
                  class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet"
                >
                  <img src="images/icon-fully-customizable.svg" alt="" />
                </div>
              </div>
              <h5
                class="pt-6 text-xl font-bold text-center capitalize md:text-left"
              >
                Fully customizable
              </h5>
              <p class="text-center text-gray-400 md:text-left">
                Improve brand awareness and content discoverability through
                customizable books, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>
    
        <!-- CTA Section -->
        <section id="cta" class="py-24 bg-darkViolet">
          <div class="flex flex-col p-2 space-y-6">
            <h5
              class="mx-auto space-y-10 text-4xl font-bold text-center text-white"
            >
              Read your books today
            </h5>
            <button
              class="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight hover:opacity-70 md:text-base md:py-3 focus:outline-none"
            >
              Get Started
            </button>
          </div>
        </section>
    
        <footer class="py-16 bg-veryDarkViolet">
          <div
            class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start"
          >
    
            <!-- Menus Container -->
            <div
              class="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0"
            >
              <!-- Menu 1 -->
              <div class="flex flex-col items-center w-full md:items-start">
                <div class="mb-5 font-bold text-white capitalize">Features</div>
                <div class="flex flex-col items-center space-y-3 md:items-start">
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Books</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Branded books</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Analytics</a
                  >
                </div>
              </div>
    
              <!-- Menu 2 -->
              <div class="flex flex-col items-center w-full md:items-start">
                <div class="mb-5 font-bold text-white capitalize">Resources</div>
                <div class="flex flex-col items-center space-y-3 md:items-start">
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Blog</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Developers</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Support</a
                  >
                </div>
              </div>
    
              <!-- Menu 3 -->
              <div class="flex flex-col items-center w-full md:items-start">
                <div class="mb-5 font-bold text-white capitalize">Company</div>
                <div class="flex flex-col items-center space-y-3 md:items-start">
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >About</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Our Team</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Careers</a
                  >
                  <a href="#" class="capitalize text-grayishViolet hover:text-cyan"
                    >Contact</a
                  >
                </div>
              </div>
            </div>
    
            <!-- Social Container -->
            <div class="flex space-x-6">
              <a href="#">
                <img src="images/icon-facebook.svg" alt="" class="ficon" />
              </a>
              <a href="#">
                <img src="images/icon-twitter.svg" alt="" class="ficon" />
              </a>
              <a href="#">
                <img src="images/icon-pinterest.svg" alt="" class="ficon" />
              </a>
              <a href="#">
                <img src="images/icon-instagram.svg" alt="" class="ficon" />
              </a>
            </div>
          </div>
        </footer>
        
        `;
  };

  populateBooks(arr) {
    let bookContainer = document.querySelector(".bookPop");
    bookContainer.innerHTML = "";
    arr.forEach((e) => {
      bookContainer.innerHTML += `
            <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row" id=${e.id}>
    
            <div class="grid grid-cols-1 gap-3 items-center justify-between w-full p-6 md:flex-col">
              <p class="text-center text-veryDarkViolet w-full md:text-left">
                Title: <span class="font-bold rounded-lg p-1 bg-cyan"> ${e.title} </span>
              </p>
              <p class=" text-center text-veryDarkViolet md:text-left">
                Author: <span class="font-bold">${e.author}</span>
              </p>
              <p class=" text-center text-veryDarkViolet md:text-left">
                Genre: <span class="font-bold">${e.genre}</span>
              </p>
              <p class=" text-center text-veryDarkViolet md:text-left">
                Year: <span class="font-bold">${e.year}</span>
              </p>
              <p class=" text-center text-veryDarkViolet md:text-left">
                Stock: <span class="font-bold">${e.stock}</span>
              </p>
            </div>
            
  
            <div class="flex flex-row items-center justify-center space-x-4 w-50 md:flex md:flex-col md:space-x-0 md:space-y-3">
              <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none" id="delete">
                <i class="fa-solid fa-trash-can"></i>
              </button>
  
              <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none edit_btn">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </div>

            
            `;
    });
  }

  async getBookForPopulate() {
    let api = new Api();
    let allBooks = await api.getAllBooks();
    this.shortSelection(allBooks);
    this.populateBooks(allBooks);
  }

  async deleteBook() {
    let bookContainer = document.querySelector(".bookPop");
    bookContainer.addEventListener("click", (e) => {
      let el = e.target;
      let id = el.parentNode.parentNode.id;
      if (el.id == "delete") {
        let api = new Api();
        api.deleteBook(id);
        location.reload();
      }
    });
  }

  searchFunction = async (e) => {
    let api = new Api();
    let allBooks = await api.getAllBooks();

    let bookContainer = document.querySelector(".bookPop");
    bookContainer.innerHTML = "";
    
    let arr = [];

    allBooks.forEach((e) => {
      
      if(e.title.toLowerCase().includes(this.searchInput.value.toLowerCase())) {
        arr.push(e);
      }
    });

    if (this.searchInput.value == "") {
      this.populateBooks(allBooks);
    }
    let uniqueChars = [...new Set(arr)];
    this.populateBooks(uniqueChars);
  };

  async sortFunction() {
    let sort = document.querySelector("#sort");
    let api = new Api();
    let allBooks = await api.getAllBooks();
    sort.addEventListener("change", (e) => {
      let el = e.target;
      if (el.value == "Name") {
        this.shortSelection(allBooks, title);
        this.populateBooks(allBooks);
      } else if (el.value == "Year") {
        this.shortSelection(allBooks, year);
        this.populateBooks(allBooks);
      } else if (el.value == "Stock") {
        this.shortSelection(allBooks, stock);
        this.populateBooks(allBooks);
      }
    });
  }

  shortSelection(arr, sort = "title") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][`${sort}`] > arr[j].title[`${sort}`]) {
          let aux = arr[i];
          arr[i] = arr[j];
          arr[j] = aux;
        }
      }
    }
  }

  removeSameElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].title == arr[j].title) {
          arr.remove(arr[j]);
        }
      }
    }
  }

  editBook(){
    let bookContainer = document.querySelector('.bookPop');
    bookContainer.addEventListener('click', (e)=>{
      let el = e.target;
      let parent = el.parentNode.parentNode;
      let objId = parent.id;
      
      //modifying the text content of book container
      if(el.classList.contains('edit_btn')){
        parent.innerHTML = "";
        parent.innerHTML += `

          <div class="flex flex-row jusfify-between" id=${objId}>

              <div class="flex flex-col justify-center w-1/2 gap-5 rounded-lg shadow-sm p-3 text-center">
                <input class="text-center font-bold" "type="text" placeholder="title" id="title_input">
                <input class="text-center font-bold" type="text" placeholder="author" id="author_input">
                <input class="text-center font-bold" type="text" placeholder="genre" id="genre_input">
                <input class="text-center font-bold "type="text" placeholder="year" id="year_input">
                <input class="text-center font-bold" type="text" placeholder="stock" id="stock_input">
              </div>

              <div class="flex justify-center items-center w-1/2 p-3">
                <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none save_btn">SAVE</button>
              </div>

            </div>
          
        `
      }

      let titleInput = document.querySelector('#title_input').value;
      let authorInput = document.querySelector('#author_input').value;
      let genreInput = document.querySelector('#genre_input').value;
      let yearInput = document.querySelector('#year_input').value;
      let stockInput = document.querySelector('#stock_input').value;

      //creating the object and editing it

      if(el.classList.contains('save_btn')){
        let obj = {
          id: objId,
          title: titleInput,
          author: authorInput,
          genre: genreInput,
          year: yearInput,
          stock: stockInput
        }
        console.log(obj);

        let api = new Api();
        api.editBook(objId, obj);
        location.reload();
      }
    })

  }
}
