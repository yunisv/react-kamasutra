import css from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={css.nav}>
            <div className={css.links}>
                <div>
                    <a href={"#s"}>Profile</a>
                </div>
                <div>
                    <a href={"#s"}>Messages</a>
                </div>
                <div>
                    <a href={"#s"}>News</a>
                </div>
                <div>
                    <a href={"#s"}>Music</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar