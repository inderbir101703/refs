import { forwardRef,useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
const ResultModal=forwardRef(function ResultModal({targetTime,remainingTime,onReset},ref){
    const dialog=useRef()
    const userLost=remainingTime<=0
    const formattedTime=(remainingTime/1000).toFixed(2)
    const score=Math.round((1-remainingTime/(targetTime*1000))*100)
    // to make this component independent from outer using this useimperative funciton
    useImperativeHandle(ref,()=>{
        return {
            open(){
  dialog.current.showModal()
            }
        }
    })
    return createPortal(<dialog className="result-modal" ref={dialog}>
        {userLost ? <h2>You Lost </h2>:   <h2>you won</h2>}
     {!userLost && <p>your score is {score}</p>}
        <p>the target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with<strong>{formattedTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>close</button>
        </form>
    </dialog>,document.getElementById('modal'))
})
export default ResultModal
//portals is needed to insrt the element is specific html elements for proper accessbility and html order

