import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentTab, handleTabChange } = props;
return (
    <div>
        <section>
            <header className='flex-row px-1'>
                <div>
                    <h1> Michael Gibson's Portfolio </h1>
                </div>
                <div>
                    <Nav
                        currentTab={currentTab}
                        handleTabChange={handleTabChange}
                    ></Nav>
                </div>
            </header>
        </section>
        <section class="hero">
            <div class="hero-cta">
                <h2>Hello!</h2>
                <p>This portfolio was built using React. i've also included links to other projects i've built</p>
            </div>
        </section>
    </div>
    );

}

export default Header;