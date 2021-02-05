
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerInfo() {
  const history = useHistory();
    
  const sendNextButton = () => {
      history.push('/Checkout');
  }

  const dispatch = useDispatch();


    const dispatch = useDispatch();
    const history = useHistory()
    let [name, setName]= useState('');
    let [street, setStreet] = useState('');
    let [city, setCity]= useState('');
    let [zip, setZip]= useState('');
    let [delivery, setDelivery]= useState(false);
    

   const resetInput = event =>{
        console.log( 'resetInput');
      setName(''),
      setStreet(''),
      setCity(''),
      setZip(''),
      setDelivery(false)
   }

  const resetInput = event => {
    console.log('resetInput', event.target.value);
      setName('');
      setStreet('');
      setCity('');
      setZip('');
      setDelivery(false);


  } // end handleChange

  const handleSubmit = event => {
    event.preventDefault();
    let customerInfo = {

                        customer_name: name, 
                        street_address: street, 
                        city: city, 
                        zip: zip, 
                        delivery: delivery
                    };
    dispatch( { type: 'CUSTOMER_INFO', payload: customerInfo } );
    console.log(`in customerInfo form`, {name, street, city, zip, delivery});
    history.push('/Checkout')

    resetInput();
  }
  return (
    <div id="customerInfo">
      <h1>Step 2: Customer Information</h1>

      <form className="add-customerInfo-form" onSubmit={handleSubmit} >
        <div className="form-group row">
          <label for="nameInput" class="col-sm-2 col-form-label">Name: </label>
          <div class="col-sm-10">
            <input
              id="nameInput"
              className="form-control"
              required
              type="text"
              placeholder="Blaine Booher"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="addressInput" class="col-sm-2 col-form-label">Address: </label>
          <div class="col-sm-10">
            <input
              id="addressInput"
              className="form-control"
              required
              type="text"
              placeholder="122 1/2 Broadway N."
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
        <label for="cityInput" class="col-sm-2 col-form-label">City: </label>
        <div class="col-sm-6">
        <input
          id="cityInput"
          className="form-control"
          required
          type="text"
          placeholder="Fargo"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        </div>
        <label for="zipInput" class="col-sm-2 col-form-label">Zip Code: </label>
        <div class="col-sm-2">
        <input
          id="zipInput"
          className="form-control"
          required
          type="number"
          placeholder="58103"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        </div>
        </div>
        <div className="form-group row">
        <div class="col-sm-2">Delivery?</div>
        <div class="col-sm-1">
        <div class="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="deliveryCheckbox"
          value={delivery}
          onChange={(event) => setDelivery(event.target.value)}
        />
        </div>
        </div>
        </div>
        <button 
        onClick={()=> sendNextButton()}
        class="btn-lg btn-info" type="submit">
          Next
        </button>
      </form>

    </div>
  ) //end return

} // end function

export default CustomerInfo;
