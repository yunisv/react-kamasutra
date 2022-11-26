import css from "./Header.module.css";

const Header = () => {
    return(
        <div className={css.header}>
            <div className={css.logo_box}>
                <img className={"logo"} src="https://e7.pngegg.com/pngimages/1009/720/png-clipart-logo-hawk-bird-bird-animals-monochrome.png" alt="logo"/>
            </div>
        </div>
    )
}

export default Header;