import Header from "./Header"
import Book from "../assets/Book.png"
import Modal from "./modal";

const Layout = ({
    title,
    desc,
    className,
    children,
    logo
}) => {
    return (
        <>
            <Header />
            <Modal />
            <div className="gradient-color">
                {
                    logo ? (
                    <div className="logo">
                        <img src={Book} alt="open book" style={{ height: "48px" }} />{title}
                    </div>
                    )
                        : (
                            <h2>{title}</h2>
                        )
                }
                <p className="desc-p">{desc}</p>
            </div>
            <div className={className}>{children}</div>
        </>

    )

}

export default Layout;