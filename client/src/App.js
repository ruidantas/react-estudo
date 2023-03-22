import { Capslock } from "./capslock";
import { Home } from "./home";

export function App(){
  return(
    <>
    <Home/>
    <h1>Hello World</h1>
    <Capslock text="um teste" textH2="outro texto"/>

    </>
  )
}