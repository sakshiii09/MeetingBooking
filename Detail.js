import React from 'react'
import '../App.css'; 

export const Detail = () => {
    
    return (
        <>
            <br />
            <h3 className='text-center' style={{opacity:"0.4"}}> Meeting Room Booking</h3>
            <form className='center' style={{width: "65%", margin: "53px",padding: "16px", marginLeft: "22%"}}>
                <div >
                    <label for="disabledSelect" className="form-label">Meeting Room</label>
                    <select id="disabledSelect" className="form-select">
                        <option value="">Open this select menu</option>
                        <option value="Training Room">Training Room</option>
                        <option value="Conference Room">Conference Room</option>
                        <option value="Huddle Room">Huddle Room</option>
                    </select>
                    <br/>

                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                    <br/>
                    <label for="exampleInputPassword1" className="form-label">Meeting Description</label>
                    <input type="text" className="form-control" />
                    <br/>
                </div>

            </form>
        </>
    )
}
