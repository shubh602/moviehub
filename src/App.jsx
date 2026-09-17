import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./Pages/Body"
import Browser from "./Components/Browser"
import { Provider } from "react-redux"
import appstore from "./utils/appStore"

function App() {
  return(
     <Provider store={appstore}>
         <Body />
     </Provider>
  ) 
}


export default App
