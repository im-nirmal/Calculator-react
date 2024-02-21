import React, { useState } from 'react'
import './App.css'

function Calculator() {
    const [displayContent, setDisplayContent] = useState("")

    const handleClear =()=>{
        setDisplayContent("")
    }

    const handleDisplay =(value)=>{
        setDisplayContent(displayContent + value)
    }

    const handleDelete =()=>{
        setDisplayContent(displayContent.slice(0,-1))
    }

    const handleResult =()=>{
        try{
            setDisplayContent(eval(displayContent))
        }catch(err){
            setDisplayContent("ERROR")
        }
    }

  return (
    <>
    <div style={{width:'100%', height:'100vh'}} className="d-flex justify-content-center align-items-center bg-secondary">
        <div style={{width:'500px',height:'600px'}} className="container d-flex justify-content-center align-items-center bg-dark border border-dark rounded">
           <form >
                <div style={{width:'450px', height:'550px'}} className="border border-dark rounded d-flex flex-column">
                    <div className='p-3'>
                        <input style={{backgroundColor:'black', color:'white', height:'100px', fontSize:'50px'}} type="text" className='form-control mt-1 p-3 border border-dark ' placeholder='0' readOnly value={displayContent} />
                    </div> 

                    <div className='group'>
                        <input type="button" onClick={handleClear} value="AC" className='btn btn-outline-danger' style={{width:'205px'}} />
                        <input type="button" onClick={handleDelete} value="DEL" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('/')} value="/" className='btn btn-outline-success' />
                    </div>
                    <div className='group'>
                        <input type="button" onClick={()=>handleDisplay('7')} value="7" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('8')} value="8" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('9')} value="9" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('*')} value="*" className='btn btn-outline-success' />
                    </div>
                    <div className='group'>
                        <input type="button" onClick={()=>handleDisplay('4')} value="4" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('5')} value="5" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('6')} value="6" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('-')} value="-" className='btn btn-outline-success' />
                    </div>
                    <div className='group'>
                        <input type="button" onClick={()=>handleDisplay('1')} value="1" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('2')} value="2" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('3')} value="3" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('+')} value="+" className='btn btn-outline-success' />
                    </div>
                    <div className='group'>
                        <input type="button" onClick={()=>handleDisplay('00')} value="00" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('0')} value="0" className='btn btn-outline-success' />
                        <input type="button" onClick={()=>handleDisplay('.')} value="." className='btn btn-outline-success' />
                        <input type="button" onClick={handleResult} value="=" className='btn btn-outline-success' />
                    </div>

                </div>
           </form >            
        </div>
    </div>
    
    </>
  )
}

export default Calculator