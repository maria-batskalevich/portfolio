import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Footer} from "./footer/Footer";
import {Contacts} from "./contacts/Contacts";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<Hire/>*/}
            <Contacts/>
            <Footer/>
        </div>
    );
}

