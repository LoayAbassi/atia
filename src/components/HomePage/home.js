import Header from '../header/Header';
import Part from '../Partners/Part';
import AboutATIA from '../aboutATIA/AboutATIA';
import Bureau from '../bureau/Bureau';
import Events from '../events/Events';

export default function HomePage(){
    return(
        <>
            <Header />
            <Part />
            <AboutATIA />
            <Bureau />
            <Events />
        </>
    )
}