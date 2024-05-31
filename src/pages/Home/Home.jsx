import Profile from "../../assets/home.jpg"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import "./home.css"


const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I`m Christovel Slat.</span> Web Designer
                    </h1>

                    <p className="home__description">Hi, I`m Chris, your coding companion for crafting sleek websites, dynamic graphics, and intuitive interfaces. Let`s turn your ideas into reality through the power of programming!</p>

                    <Link to='/about' className='button'>
                        More About Me {''} 
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home
