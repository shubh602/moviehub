import Header from "../../Components/Header"
import useNewMovies from "../../hooks/useNewMovie"




const Browser = () => {

  useNewMovies();

  return (<div className="">
     <Header />
    <div className="text-4xl pt-20 text-center">Browser</div>
    </div>)
}

export default Browser