import React from 'react';

const Navbar = () => {
    return (<div className="navbar bg-dark col-12" data-bs-theme="dark">
        <div class="navbar navbar-expand-lg bg-body-tertiary col-12">
            <div class="d-flex justify-content-between col-12">
                <div>
                    <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white-50" aria-disabled="true">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white-50" aria-disabled="true">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white-50" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}

export default Navbar