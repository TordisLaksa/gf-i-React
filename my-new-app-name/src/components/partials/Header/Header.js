import logo from '../../../assets/images/ColorWheel.png'
import './Header.scss'

export const Header = () => {
    return (
        <header id="header-main">
            <div className="header-grid">
                <img src={logo} alt="color-wheel-global-goals-logo" />
                <article>
                    <h1>THE GLOBAL GOALS</h1>
                    <h2>For sustainable Development</h2>
                </article>
            </div>
        </header>
    )
}