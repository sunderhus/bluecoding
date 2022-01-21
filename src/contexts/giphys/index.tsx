import React, { createContext, useContext, useState } from 'react';


type ContextData ={
    giphys:string[]
}
const GiphyContext = createContext<ContextData>({} as ContextData)

const GiphyProvider:React.FC = ({children})=>{
  const [giphys] = useState<string[]>(['https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif'])

  return(
    <GiphyContext.Provider value={{
      giphys:giphys
    }}>
      {children}
    </GiphyContext.Provider>
  )
}

const useGiphy = ():ContextData=>{
  const context= useContext(GiphyContext);
  
  return context;
}

export {GiphyProvider, useGiphy}