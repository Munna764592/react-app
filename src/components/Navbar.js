import img5 from '../image/logo1.png'

export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="container navigation">
                    <a href="#">
                        <img id="header-img"
                            src={img5}
                            alt="logo"
                        />
                    </a>
                    <div className="hamburger">
                        <input type="checkbox" id="navi-toggle" className="checkbox" />
                        <label className="button" htmlFor="navi-toggle">
                            <span className="icon">&nbsp;</span>
                        </label>

                        <div id='nav-menu' className="nav-menu">

                            <div className="menu-bar">
                                <div className="pages">
                                    <a href="./home.js" className="underline" id="my-pages">
                                        Rockets
                                    </a>
                                </div>
                                <div className="case-study">
                                    <a href="./launches.js" className="underline">
                                        Launches
                                    </a>
                                </div>
                                <div className="blog">
                                    <a href="./ships.js" id="my-blog" className="underline">
                                        Ships
                                    </a>
                                </div>
                                <a href="#" className="underline">
                                    Contacts
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}