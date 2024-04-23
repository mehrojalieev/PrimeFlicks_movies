import { QueryClient } from "@tanstack/react-query"
import "./Utils.scss"

const Container = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

 const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

export  {Container, client}
