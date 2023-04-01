//JavaScript

const Header = document.getElementById("Header");
const Options = document.getElementById("Options");

Header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand fs-2 fw-bold" href="#">
        <i class="fa-solid fa-wallet"></i>
        Expense Tracker
    </a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
`;

Options.innerHTML = `
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-1">
    <ul class="list-group fs-6">
    <li class="list-group-item py-3">
        <i class="fa-solid fa-money-bill"></i>
        Basic Expenses
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-cart-shopping"></i>
        Supermarket
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-user-graduate"></i>
        Education
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-heart-pulse"></i>
        Health
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-money-bill-wave"></i>
        Taxes and Fees
    </li>
    </ul>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-1">
    <ul class="list-group fs-6">
    <li class="list-group-item py-3">
        <i class="fa-solid fa-pizza-slice"></i>
        Food
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-music"></i>
        Entertainment
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-car"></i>
        Transportation
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-plane"></i>
        Travel
    </li>
    <li class="list-group-item py-3">
        <i class="fa-solid fa-dog"></i>
        Pet Expenses
    </li>
    </ul>
    </div>
`;
