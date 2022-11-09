import React from 'react'

export default function Report() {
  return (
    
    <div className='mobile'> 
      <form className="row g-3  mx-0 my-0">
      <h3 style={{marginTop :"7px",color :"green"}}>Report Here !</h3>
      <div className="col-md-6">
        
    <label for="inputState" className="form-label">Reason </label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>First</option>
      <option>Second</option>
      <option>Other</option>
   

    </select>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Contact No</label>
    <input type="text" placeholder='+91' className="form-control" id="inputEmail4" required/>
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea placeholder='Describe Your Problem ...' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}
