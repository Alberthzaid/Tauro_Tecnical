import { api } from "./Api";

const call = async (api)=>{
    const data = await fetch(api)
    const res = await data.json()
    return res
}

export{call}