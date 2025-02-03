
import HeaderLangs from './Header/Langs.json';

function setPreferredLang(pageLangsSet = HeaderLangs) {
    console.log("setting language")
    const preferredLang = navigator.language;
    console.log(preferredLang);
    if (pageLangsSet[preferredLang]) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const dataTranslate = element.dataset.translate; //Get value of data-translate

            if (pageLangsSet[preferredLang][dataTranslate]) {
                console.log(`Body content: ${element.textContent}`);

                element.textContent = pageLangsSet[preferredLang][dataTranslate]; //Ex: Langs[en][what_we_do] -> What we do
            } else if (HeaderLangs[preferredLang][dataTranslate]) {
                console.log(`header content: ${element.textContent}`);
                element.textContent = HeaderLangs[preferredLang][dataTranslate];
            }
        })
    }

    
}

export default setPreferredLang;