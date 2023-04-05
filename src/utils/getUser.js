import { useEffect, useState } from "react";

const getUser = (url) => {
  const [state, setState] = useState([])

  useEffect(() => {
    if (!url) return

    fetch(`${url}`, {
      method:"get",
    })
    .then(res => res.json())
    .then(res => setState(res))
    .catch(err => alert(err))
  }, [url])
  
  return state
}

export default getUser;