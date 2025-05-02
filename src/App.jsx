import React from "react"
import Loader from "../Components/Loader"
import MainWebsiteContent from "../Components/MainWebsiteContent";
export default function App(){
  
  const[loading , setLoading]=React.useState(true)
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <MainWebsiteContent />}
    </>
  );
}

