import { useContext } from "react"
import { FLC } from "./FLC"

const FLT = (props) => {
  const {lang,FTR} = useContext(FLC)
  const key = props.FLK

  let path = key.split('.')
  let tr = FTR[lang]
  while(path.length>1) {
    tr = tr[path[0]]
    if(!tr) break
    path.shift()
  }
  if(!tr || !tr[path[0]]) console.log("[FTR] TRANSLATION_MISSING:",key," FOR ",lang)
  else {
    var tl = tr[path[0]]
  }

  return tl||key
}

export default FLT