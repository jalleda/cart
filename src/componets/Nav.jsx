import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/home">home</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-link active" aria-current="page" to="">Add product</Link>
                                <Link class="nav-link" to="">Fav</Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav