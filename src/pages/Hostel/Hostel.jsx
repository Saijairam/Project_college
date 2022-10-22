import React from 'react'
import './Hostel.css'

const Hostel = () => {
    const options = ['Dr. C.V. Raman','MORVI','DHANRAJGIRI Hostel - I','DHANRAJGIRI Hostel - II','RAJPUTANA','LIMBDI','VIVEKANAND','VISHWAKARMA','VISVESVARAYA','ARYABHATTA Hostel - 1 & 2','A. S.N. BOSE','Dr. S. RAMANUJAN','GANDHI SMRITI CHHATRAVAS','IIT GIRLS (SALUJA)','IIT (BHU) GIRLS HOSTEL - 1 & 2','S.C. DEY GIRLS'
    ]
    const optionChange = (e)=>{
        console.log(e.target.value);
    }
  return (
    <div className='container'>
        <form className='form'>
            <div className='mb-2'>
             <label htmlFor="" className="form-label">Select from this list</label>
             <select name="select-hostel" className='form-control' onChange={optionChange}>
                {
                    options.map((option,index)=>{
                        return <option key={index}>{option}</option>
                    })
                }
             </select>
            </div>
            <div className="mb-2">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" required />
            </div>
            <div className='form-wrap'>
            <div className="mb-2">
                    <label htmlFor="" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" required />
            </div>
            <div className="mb-2">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" required />
            </div>
           <div className="form-wrap"> 
           <div className="mb-2">
                <label htmlFor="" className="form-label">Problem</label>
                <input type="text" className="form-control" required />
           </div>
           <div className="mb-2">
                <label htmlFor="" className="form-label">Service Time</label>
                <input type="text" className="form-control" required/>
            </div>
           </div>
            <div className="mt-2 mb-2">
                <label htmlFor="" className='form-label'>Problem Summary</label>
                <textarea name="summary" id="" cols="30" rows="3" className='form-control' required></textarea>
            </div>
            {/* <div className='mb-2'>
             <label htmlFor="" className='form-label'>Attachment</label>
             <input type="file" name="file" id="" />
            </div> */}
           </div>
           <button className='btn btn-success'  style={{width:"100%"}} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Hostel