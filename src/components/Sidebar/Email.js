import React from 'react'

function Email() {
  return (
    <div >

<form className="row g-3  mx-0 my-0">
  <div className="col-md-3">
    <label for="inputEmail4" className="form-label">Primary contact</label>
    <input type="text" className="form-control" id="inputEmail4" required/>
  </div>
  <div className="col-md-3">
    <label for="inputPassword4" className="form-label">DOB</label>
    <input type="date"  className="form-control" id="inputPassword4" required/>
  </div>
  <div className="col-md-3">
    <label for="inputEmail4" className="form-label">Customer Designation</label>
    <input type="text" className="form-control" id="inputEmail4" required/>
  </div>
  <div className="col-md-3">
    <label for="inputPassword4" className="form-label">Customer Email</label>
    <input type="email" placeholder='example@gmail.com' className="form-control" id="inputPassword4" required/>
  </div>
  <div className="col-md-3">
    <label for="inputEmail4" className="form-label">Customer Phone</label>
    <input type="number" className="form-control" id="inputEmail4" required/>

    
  </div>







  
   





  <div className="col-md-3">
    <label for="inputPassword4" className="form-label">Company Name</label>
    <input type="text" className="form-control" id="inputPassword4" required/>
  </div>
  <div className="col-md-3">
    <label for="inputState" className="form-label">Industry Vertical </label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Retail</option>
      <option>Finance</option>
      <option>Transportation</option>
      <option>Food and beverages</option>
      <option>Logistics</option>
      <option>E-Commerce</option>

    </select>
  </div>
  <div className="col-md-3">
    <label for="inputState" className="form-label">Country </label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>INDIA</option>
      <option>USA</option>
      <option>CHINA</option>
      <option>NEPAL</option>
      <option>BANGLADESH</option>
      <option>PAKISTAN</option>

    </select>
  </div>
  <div className="col-md-3">
    <label for="inputEmail4" className="form-label">Postal Code</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-3">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Uttar Pradesh</option>
      <option>UttraKhand</option>
      <option>Chhattisgarh</option>
      <option>Gujarath</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Meghalaya</option>

    </select>
  </div>
  <div className="col-md-3">
    <label for="inputEmail4" className="form-label">City</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-3">
    <label for="inputPassword4" className="form-label">Street Address</label>
    <input type="text" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-3">
    <label for="inputAddress" className="form-label">Customer Website</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="www.example.com"/>
  </div>
  {/* <div className="col-9">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div> */}
  {/* <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div> */}
  {/* <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  {/* <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div> */}
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

    </div>


    
  )
}

export default Email