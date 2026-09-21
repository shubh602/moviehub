import Header from "../../Components/Header"
import useNewMovies from "../../hooks/useNewMovie"
import Main from "./Main";
import Secondary from "./Secondary";
import usePopularMovie from "../../hooks/usePopularMovie";
import useTopRatedMovie from "../../hooks/useTopRatedMovie";
import useUpcomingMovie from "../../hooks/useUpcomingMovie";



const Browser = () => {

  useNewMovies();
  usePopularMovie()
  useTopRatedMovie()
  useUpcomingMovie()

  return (<div className="scrollbar-none bg-black text-white">
             <Header />
             <Main />
             <Secondary />
          </div>)
}

export default Browser