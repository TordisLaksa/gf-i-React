export const Footer = () => {
    return (
        <footer>
            <article>
                <h2>Eksterne Links:</h2>
                <ul>
                    <li><a href="https://www.verdensmaalene.dk/">https://www.verdensmaalene.dk/</a></li>
                    <li><a href="https://www.globalgoals.org/">https://www.globalgoals.org/</a></li>
                    <li><a href="https://www.un.org/sustainabledevelopment/">https://www.un.org/sustainabledevelopment/</a></li>
                    <li><a href="https://worldslargestlesson.globalgoals.org/">https://worldslargestlesson.globalgoals.org/</a></li>
                    <li><a href="https://www.unenvironment.org/">https://www.unenvironment.org/</a></li>
                    <li><a href="https://ve.dk/klimaberegner/">https://ve.dk/klimaberegner/</a></li>

                </ul>
            </article>
            <article>
                <h2>Ressourcer:</h2>
                <ul>
                    <li><a href="assets/pdf/Bliver verden bedre_ Final small.pdf">Bliver Verden Bedre (.pdf)</a></li>
                    <li><a href="assets/pdf/SPOTLIGHT-Rapport_Enkeltsider.pdf">Spotlight Rapport (.pdf)</a></li>
                </ul>
            </article>
            <img src={require("../../../assets/images/Partner-UNDP-Full.png")} alt="UN-logo-full-size" />
        </footer>
    )
}