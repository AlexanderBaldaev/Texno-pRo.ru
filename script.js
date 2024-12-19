function openLoginPopup() {
  document.getElementById("login-popup").style.display = "block";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function closeLoginPopup() {
  document.getElementById("login-popup").style.display = "none";
}

function toggleForm(formType) {
  if (formType === "login") {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
  } else if (formType === "register") {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  }
}

function toggleSearch() {
  const searchBar = document.getElementById("search-bar");
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
}
let currentPage = 1;
const totalPages = 2;

function updatePagination() {
  document.getElementById(
    "current-page"
  ).textContent = `Страница ${currentPage} из ${totalPages}`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
    loadPage(currentPage);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
    loadPage(currentPage);
  }
}

function loadPage(page) {
  const products = document.querySelectorAll(".product-list");
  products.forEach((productList, index) => {
    productList.style.display = index === page - 1 ? "flex" : "none";
  });
}

updatePagination();
document.getElementById("searchBtn").addEventListener("click", function () {
  var selectedCategory = document.getElementById("searchDropdown").value;
  var searchQuery = document.getElementById("searchInput").value;
  var message =
    "Поиск по категории: " + selectedCategory + ", запрос: " + searchQuery;

  document.getElementById("searchResult").textContent = message;
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("searchDropdown").value = "all";
  document.getElementById("searchInput").value = "";

  document.getElementById("searchResult").textContent = "";
});
document.getElementById("search-button").addEventListener("click", () => {
  const searchValue = document.getElementById("search-input").value;
  if (searchValue) {
    alert(`Вы ищете: ${searchValue}`);
  } else {
    alert("Введите поисковый запрос!");
  }
});
const slides = document.querySelectorAll(".slider-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  const offset = -index * 100;
  document.querySelector(
    ".slider-wrapper"
  ).style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

showSlide(currentSlide);

document.querySelectorAll('a[href="#action-free"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetElement = document.getElementById("action-free");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  });
});
