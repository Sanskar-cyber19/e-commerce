import { useEffect, useState } from 'react';
import Router from 'next/router';
import { getCart, addToCart, clearCart, removeItem } from "@/utils/cart"

export default function cart () {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [state, setState] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [upi, setUpi] = useState('');
	const [cart, setCart] = useState([]);
	const [finalt,setFinalt] = useState(0)
	
	const placeOrder = async (e) => {
		e.preventDefault();
		
		const response = await fetch('/api/order',{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
			firstName, lastName, email, address1, address2, state, pinCode,upi,cart
			}),
		});
		
		if (response.ok){
			Router.push('/');
		} else {
			alert("try again")
		}
	};
	
	useEffect(()=>{
		setCart(getCart());
	},[])
	
	const remove = (id) => {
		removeItem(id);
		setCart(getCart());
	}
	return(
		<>
		<main className="row g-5">
		<div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
        </h4>
        <ul className="list-group mb-3">
		{cart.map((product)=>(
		<li key={product.id} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{product.name}</h6>
              <small className="text-muted">Quantity:{product.quantity}</small>
            </div>
            <span className="text-muted">${product.amount}</span>
		  <span className="fa fa-box-open" onClick={() => remove(product.id)}></span>
          </li> 
		))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>{finalt}</strong>
          </li>
        </ul>
      </div>
	  
	  
		<div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" onSubmit={placeOrder}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={address1} onChange={(e) => setAddress1(e.target.value)} required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" value={state} onChange={(e) => setState(e.target.value)} required>
                <option value="">Choose...</option>
                <option>Maharestra</option>
				<option>mp</option>
				<option>Up</option>
				<option>Uk</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" value={pinCode} onChange={(e) => setPinCode(e.target.value)} required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="col-md-3">
              <label for="upi" className="form-label">UPI Id</label>
              <input type="text" className="form-control" id="zip" placeholder="" value={upi} onChange={(e) => setUpi(e.target.value)} required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
	  </main>
		</>
	)
}