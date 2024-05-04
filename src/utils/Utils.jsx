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



const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="card-skeleton-image"></div>
      <div className="card-skeleton-details">
        <div className="card-skeleton-title"></div>
        <div className="card-skeleton-description"></div>
      </div>
    </div>
  );
};

export  {Container, client, CardSkeleton}
