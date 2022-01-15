export const Main = () => {

    //test

    //function definition - tager form element som parameter
    function validate() { //her ligger min validate function som jeg kalder i min html 
        // det indeni () er op til mig hvad det hedder

        let state = true; //definerer at state er true, altså har en værdi
        const inputs = document.querySelectorAll(':required'); //inputs bliver defineret ved alle required felterne i HTML'en (den laver et array, ALL = [])


        for (let input of inputs) { //en variabel (input) som samler data fra min inputs variabel
            if (!input.value) { // hvis der ingen værdi er i input varianblen
                console.log(input.type);
                setError(input, 'Du skal udfylde feltet'); //er her jeg laver min setError til input felterne
                state = false;  // her giver vi state en falsk værdi
                return false; //bryder ud af loopet med return false
            } else if (input.className == 'text') { // her spørger jeg om class er = text (den jeg har givet til tekst felterne)
                if (!isValidAlpha(input.value)) { //hvis der er andet end bogstaver i inputfelterne
                    setError(input, `Der må kun være bogstaver i feltet`); //sættes teksten ...
                    state = false; //state bliver sat til false
                    return false; //return false = der brydes ud af loopet
                }
            }
            else if (input.className == 'number') { //er class= number (givet i html)
                if (!isValidNumber(input.value)) { // hvis der er andet end tal i inputfelterne
                    setError(input, `Der må kun være tal i feltet`); //sættes teksten...
                    state = false;
                    return false;
                }
            }
            else if (input.className == 'email') { //er class= email (givet i html)
                if (!isValidEmail(input.value)) { //hvis der ikke er indtastet en gyldig email
                    setError(input, `Du har ikke indtastet en gyldig`); //sættes teksten
                    state = false;
                    return false;
                }
            }
        }
        if (state) { // hvis state er true, så går js ind i det her
            if (!document.querySelector('.success')) {
                let div = document.createElement('div');
                div.classList.add('success');
                div.innerText = 'Formularen er sendt';
                document.getElementById('form').appendChild(div);
                console.log(123);
            }
        }

    }
    //javaScript er ligeglad med hvor du placerer dine functions den skal nok finde dem
    function setError(element, text) { //her henviser jeg elementet (input) 
        // her viser vi element(input) --> sibling over input = label --> innertext
        element.classList.add('error'); //tilføjer en 'error' class til elementet (input) hvis der er en fejl
        if (!element.nextElementSibling) { //her definerer vi at vi skal ind i loopet HVIS input feltet er false
            let strError = `<br /><span class="errormessage">${text} ${element.placeholder.toLowerCase()}</span>`// declarerer strError og giver den værdien span med tekst indeni 
            // "${element.previousElementSibling.innerText.toLowerCase()}" det er den her der giver os label indholdet og laver forbogstavet småt
            element.insertAdjacentHTML('afterend', strError); //inputfeltet får tilføjet str error og at den bliver placeret afterend = bagved inputfeltet
        }
        element.addEventListener('keydown', function () { //en lytter pÃ¥ vores input felt som reagerer på keydown (alle taster) og kører funktionen hvos der tastes
            if (element.nextElementSibling) { //hvis der er inhold i input felterne (true) altså at der er en next sibling
                element.nextElementSibling.remove(); //så fjerner funktionen .errormessage
            }

            element.classList.remove('error'); //fjerner .error hvis den bliver rettet og sendt 
        })
    }
    //Tjekker om værdi er et nummer
    function isValidNumber(value) {
        let pattern = /^[0-9]+$/;
        return pattern.test(value);
    }

    //Tjekker om værdi er alfabet
    function isValidAlpha(value) {
        let pattern = /^[A-ZÆØÅa-zæøå ]+$/;
        return pattern.test(value);
    }

    //Tjekker om værdi har en gyldig email syntaks
    function isValidEmail(value) {
        let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return pattern.test(value);
    }

    //Tjekker at værdi har en gyldig længde
    function isValidLength(value, min, max) {
        let pattern = RegExp('^[0-9A-Za-z@#$%]{' + min + ',' + max + '}$');
        return pattern.test(value);
    }



    //test

    return (
        <main /*className={styles.mainContainer}*/ >
            {/* SECTION ONE  */}
            <section id="verdengoals">
                <h2>DE 17 VERDENSMÅL</h2>
                <p>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og
                    samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.
                </p>
                <p>Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og
                    planeten, vi bor på.
                </p>
                <div className="article-grid">
                    <article>
                        <h3>Verdensmålene forpligter.</h3>
                        <p>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse
                            og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og
                            forbrug.
                        </p>
                        <p>Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed
                            og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå
                            holdbare udviklingsresultater.
                        </p>
                    </article>
                    <article>
                        <h3>Verdensmålene gælder alle.
                        </h3>
                        <p>Målene gælder alle lande - både rige og fattige - dvs. de er universelle.
                        </p>
                        <p>Udfordringer som social, økonomisk marginalisering, stigende ulighed, fødevareusikkerhed, ulig adgang
                            til grundlæggende naturressourcer,og har regionale og globale konsekvenser.
                        </p>
                        <p>Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.
                        </p>
                    </article>
                </div>
            </section>

            {/* SECTION TWO */}
            <section id="delgoals">
                <h2>DELMÅLENE</h2>
                <p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.
                </p>
                <p className="tykke">Se eksempler på enkelte delmål her:</p>
                <section id="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                    </div>
                </section>
                <a className="top" href="#header-main">Tilbage til top</a>  {/* back to top */}
            </section>

            {/* SECTION THREE */}
            <section id="udfordringer">
                <h2>UDFORDRINGER</h2>
                <p>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.
                </p>
                {/* FIGURE ONE */}
                <figure>
                    <figcaption>
                        <h3>Vækst vs. bæredygtighed.</h3>
                        <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.
                        </p>
                        <p>Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.
                        </p>
                        <p>De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.
                        </p>
                    </figcaption>
                    <img src={require("../../../assets/images/Image-Sustainability.jpg")} alt="men- working-together" />
                </figure>
                {/* FIGURE TWO */}
                <figure>
                    <figcaption>
                        <h3>Leave no-one behind.</h3>
                        <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.
                        </p>
                        <p>Arbejdet med verdensmålene skal begynde med, at de
                            fattigste og mest marginaliserede adresseres først.
                        </p>
                        <p>Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.
                        </p>
                        <p>Med ander ord: “Leave On-One behind”.
                        </p>
                    </figcaption>
                    <img src={require("../../../assets/images/Image-Leave-No-One.jpg")} alt="women-standing-together- dancing" />
                </figure>
                {/* FIGURE THREE  */}
                <figure>
                    <figcaption>
                        <h3>Fattigdom og sult.</h3>
                        <p>Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.
                        </p>
                        <p>Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.
                        </p>
                        <p>En stor udfordring, men vi er allerede godt på vej.
                        </p>
                    </figcaption>
                    <img src={require("../../../assets/images/Image-Hunger.jpg")} alt="blue-plate-of-food-tossed-into-the-air" />
                </figure>
                <a className="top" href="#header-main">Tilbage til top</a>  {/* back to top */}
            </section>

            {/* SECTION FOUR */}
            <section id="contact">
                <h2>KONTAKT OS</h2>
                <p>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:
                </p>
                <figure>
                    <img src={require("../../../assets/images/UN-Logo-Large.png")} alt="un-logo" />
                    <figcaption>
                        <form id="form">
                            <div>
                                <input type="text" id="firstname" className="text" required placeholder="Indtast dit fulde navn" autoFocus />
                                {/* required felterne er dem jeg querySelecterAll i min javaScript */}
                            </div>
                            <div>
                                <input type="email" id="email" className="email" required placeholder="Indtast gyldig E-mail" />
                            </div>
                            <div>
                                <input type="number" id="phonenumber" className="number" required placeholder="Telefon" />
                            </div>
                            <textarea name="message" id="message" placeholder="Evt. Besked."></textarea>
                            <div className="buttons">
                                {/* fordi jeg bruger et onclick event, skal jeg bruge en type button */}
                                <button id="red" type="reset">FORTRYD</button>
                                {/*jeg kalder funktionen validate, som har parameteret (this.form - altså, den form, som knappen ligger i) */}
                                <button id="green" type="button" onClick={() => validate()}>SEND</button>
                            </div>
                        </form>
                    </figcaption>
                </figure>
                <a className="top" href="#header-main">Tilbage til top</a> {/*back to top*/}
            </section>
        </main>
    )
}
