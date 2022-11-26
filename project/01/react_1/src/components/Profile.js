import css from "./Profile.module.css";

const Profile = () => {
    return(
        <div className={css.content}>
            <div className={css.coverBox}>
                <img className={css.cover} alt={"cover-img"} src={"https://vsegda-pomnim.com/uploads/posts/2022-04/1649330254_24-vsegda-pomnim-com-p-krasivoe-more-plyazh-foto-36.jpg"}/>
            </div>
        </div>
    )
}

export default Profile