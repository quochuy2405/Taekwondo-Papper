import React, { useContext, useEffect, useMemo } from 'react'
import { context } from '../Context/Context'

interface Text {
  html?: any
  dataFocus?: any
  setHtml?: any
}
function AddText(props: Text) {
  const { html, dataFocus, setHtml } = props
  const { objFocus, setObjFocus } = useContext(context)

  useEffect(() => {
    const elemetText: any = document.querySelector(`[data-focus='${objFocus}']`)
    if (elemetText) {
      elemetText.innerHTML = html
    }
  }, [html, dataFocus])
  const getfocus = (e: any) => {
    if (e.target) {
      e.target.classList.toggle('focusText')
      setObjFocus(dataFocus)
      setHtml(e.target.textContent)
    }
  }
  return (
    <div className="relative">
      <div
        onClick={getfocus}
        data-focus={dataFocus}
        className="whitespace-pre-wrap cursor-pointer text-choose "
      ></div>{' '}
      <i className="fas text-gray-400 fa-minus-square absolute right-[-14px] top-[50%] translate-y-[-50%]"></i>
    </div>
  )
}

export default AddText
