import { React, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

const DpNone = () => {
    return(
        <div>
            아직 준비되지 않았습니다.
        </div>
    )
}

const DpElem = (props) => {
    const data = props.data
    const header = data.split("\r\n")[0].split(",")
    const member = data.slice(data.indexOf("\r\n") + 1).split("\r\n")
    
    const Dpinform = []
    // const v = "abc"
    
    member.map(str => {
        if (!str.includes("\"")) {
            Dpinform.push(str.split(","))
        }
        else {
            // Dpinform.push(str.split(","))
            let quote = false
            let result = []
            let elem = ""
            for(let i = 0; i < str.length; i++) {
                if (quote) { // 따옴표가 있는 경우, 닫는 따옴표가 나올때까지 나누지 않는다.
                    if (str[i] === "\"") { // 닫는 따옴표가 나오면 이 뒤로는 다시 쉼표로 나눈다.
                        result.push(elem)
                        elem = ""
                        quote = false
                    }
                    else elem += str[i]
                }
                else { // 따옴표가 없는 경우, 쉼표로 나눈다.
                    if (str[i] === "\"") { // 야는 따옴표 발견시
                        quote = true
                        continue
                    }
                    if (str[i] === ",") {
                        if (i < str.length - 1 && str[i + 1] === ",") result.push(elem)
                        if(elem !== "") {
                            result.push(elem)
                            elem = ""
                        }
                    }
                    else elem += str[i]
                }
                console.log("elem", elem)
                console.log("result", result)
            }
            Dpinform.push([...result])
        }
    })

    const func = (arr) => {
        return(
            <tr>
                { arr.map(s => {return (<td>{s}</td>)}) }
            </tr>
        )
    }

    console.log(Dpinform)
    
    return(
        <div>
            <div> 동아리 멤버 명단 </div>
            <br />
            <table border="1">
                { // header
                    header.map(s => { return <td key={s}>{s}</td> })
                }
                {
                    Dpinform.map(s => {return func(s)})
                }
            </table>
        </div>
    )
}

const DpLog = () => {
    const fileDir = useSelector(state => { return state.memberFile })
    const [parsedCsvData, setParsedCsvData] = useState()
    const [is_in, setIs_in] = useState(false)

    const parsedCSVFile = () => {
        axios.get(fileDir).then((m)=>{ setIs_in(true); setParsedCsvData(m.data) }).catch(()=>{ setIs_in(false) })
    }

    return(
        <div>
            {
                parsedCSVFile()
            }
            {
                is_in ? <DpElem data={parsedCsvData}/> : <DpNone />
            }
            <br /><br /><br />
        </div>
    )
}

export default DpLog