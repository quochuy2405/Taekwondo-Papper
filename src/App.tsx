import { useContext, useEffect, useState } from 'react'
import './App.css'
import AddImage from './components/AddImage'
import AddText from './components/AddText'
import { context } from './Context/Context'
import iconText from './image/Text.png'
import iconImg from './image/img.png'

export default function App() {
  const { objFocus } = useContext(context)
  const [html, setHtml] = useState('')
  const [body, setbody] = useState<Array<any>>([])
  const ToDay = new Date(Date.now())
  const addImage = () => {
    const htmlDOM = <AddImage id={`${Math.floor(Math.random() * 100 + 2)}`} />

    setbody([...body, htmlDOM])
  }
  const addText = () => {
    const datafc = Math.floor(Math.random() * 100 + 2)
    const htmlDOM = <AddText html={html} dataFocus={`${datafc}`} setHtml={setHtml} />
    setbody([...body, htmlDOM])
  }
  useEffect(() => {
    console.log(objFocus)
    const listFocus = document.querySelectorAll('.text-choose.focusText')
    listFocus.forEach((item) => {
      if (item.getAttribute('data-focus') !== objFocus.toString()) {
        item.classList.remove('focusText')
      }
    })
  }, [objFocus])
  return (
    <div className="container App bg-slate-300 relative">
      <div className="flex w-full h-[100vh] content-box">
        <div className="w-16 bg-slate-400 h-full">
          <ul className="p-2">
            <li
              onClick={addText}
              className="my-2 w-full h-12 border-2 border-solid border-white rounded-md bg-white cursor-pointer"
            >
              <img src={iconText} alt="" className="w-full h-full object-cover p-2" />
            </li>
            <li
              onClick={addImage}
              className="my-2 w-full h-12 border-2 border-solid border-white rounded-md bg-white cursor-pointer"
            >
              <img src={iconImg} alt="" className="w-full h-full object-cover p-2" />
            </li>
            <li className="my-2 w-full h-12 border-2 border-solid border-white rounded-md bg-white cursor-pointer">
              <img src={iconText} alt="" className="w-full h-full object-cover p-2" />
            </li>
            <li className="my-2 w-full h-12 border-2 border-solid border-white rounded-md bg-white cursor-pointer">
              <img src={iconText} alt="" className="w-full h-full object-cover p-2" />
            </li>
            <li className="my-2 w-full h-12 border-2 border-solid border-white rounded-md bg-white">
              <img src={iconText} alt="" className="w-full h-full object-cover p-2" />
            </li>
          </ul>
        </div>
        <div className="w-[70%] mx-auto bodyPaper p-4 bg-white  overflow-y-scroll">
          <h1 className="text-center text-4xl">Tiêu đề bài báo</h1>
          <p className="text-right pl-5">
            {`Krông Pa, Ngày	${ToDay.getDate()} tháng ${
              ToDay.getMonth() + 1
            } năm ${ToDay.getFullYear()}`}
          </p>
          <div id="body-content">
            {' '}
            <AddText html={html} dataFocus={`${1}`} setHtml={setHtml} />
            {body?.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>

          <div className="input-content border-2 ml-8 border-gray-400 rounded-md  w-[70%] left-[50%] translate-x-[-50%] absolute bottom-[-10px] right-0">
            <textarea
              value={html}
              className="w-full h-full  p-2"
              onChange={(e) => setHtml(e.target.value)}
              rows={7}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
