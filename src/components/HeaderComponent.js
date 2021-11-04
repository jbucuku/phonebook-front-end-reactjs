import React from 'react'

const HeaderComponent = () => {
    return (
        <div >
            <header>
        
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                
                
                
                    <div class="container-fluid">
                        <form class="d-flex">
                            <a className= "navbar-brand">  Phonebook Application  </a>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-light" type="submit">Search</button>
                        
                        </form>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
