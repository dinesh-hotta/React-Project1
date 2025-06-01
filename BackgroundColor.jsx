import { useEffect, useState } from "react"

function saveColor(key, initialValue) {
    console.log("hi-----------",",inside localStorage",localStorage.getItem(key),typeof (localStorage.getItem(key)),",key =", key);
    let save = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
    console.log(save,"-----------",",type of save",typeof save)
    console.log("2",",key =",key,",2 initialValue=",initialValue);
    if (save) return save
    if (initialValue) return initialValue
}
function UseColor(key, initialValue) {
    let [color, setColor] = useState(() => {
        console.log("1",",key =",key,",initialValue=",initialValue);
        console.log("hello",saveColor(key, initialValue))
        return saveColor(key, initialValue)
    })
    console.log("what is inside color:",color)
    console.log("1 initialValue=",initialValue)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(color))
        console.log("3",",key =",key);
        console.log("-----------------------End--------------------------------")
    },[color])
    console.log("before last retrun")
    console.log("3,initialValue=",initialValue)
    return[color, setColor]
}
export default UseColor