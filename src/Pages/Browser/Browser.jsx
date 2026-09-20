import Header from "../../Components/Header"
import useNewMovies from "../../hooks/useNewMovie"
import Main from "./Main";
import Secondary from "./secondary";



const Browser = () => {

  useNewMovies();

  return (<div className="">
     <Header />
     <Main />
     <Secondary />
    </div>)
}

export default Browser