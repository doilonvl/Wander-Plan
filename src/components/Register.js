import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "react-phone-input-2/lib/bootstrap.css";

const Register = () => {
    const [name, nameChange] = useState("");
    const [pass, passChange] = useState("");
    const [avatar, avatarChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [address, addressChange] = useState("");
    const [dob, dobChange] = useState("");

    // const HandleSubmit = (e) => {
    //     e.preventDefault();
    //     let User = { name, pass, avatar, email, phone, address, dob };
    //     if (name.length === 0 || pass.length === 0 || email.length === 0 || address === 0) {
    //         alert("Please fill all fields");
    //     } else {
    //         fetch('http://localhost:9999/User', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'Application/Json', 'Charset': 'UTF-8' },
    //             body: JSON.stringify(User)
    //         })
    //             .then(() => {
    //                 alert("Added successfully!");
    //             })
    //             .catch(err => {
    //                 console.log(err.message);
    //             })
    //     }
    // }

    const HandleSubmit = e => {
        e.preventDefault();
        const User = { name, pass, avatar, email, phone, address, dob }
        // console.log(product);
        if (name.length === 0 || pass.length === 0 || email.length === 0 || address === 0) {
            alert("Please fill all fields");
        } else {
            fetch('http://localhost:9999/User', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/Json', 'Charset': 'UTF-8' },
                body: JSON.stringify(User)
            })
                .then(() => {
                    alert("Registered successfully!");
                    Navigate('/login');
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }

    const Navigate = useNavigate();

    return (
        <div style={{ paddingTop: "100px" }}>
            <div className="col-lg-12">
                <form className="container" onSubmit={HandleSubmit}>
                    <div className="card">
                        <h2 className='col-lg-12'>Registration</h2>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Username <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='Input your username here' required value={name} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Password <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='Input password' type='password' required value={pass} onChange={e => passChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Avatar</label>
                                        <input placeholder='Please drop your image URL here' value={avatar} onChange={e => avatarChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Email <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='abc123@gmail.com' value={email} required onChange={e => emailChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Phone Number <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='123-456-789' value={phone} required onChange={e => phoneChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Address <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder='132, My Street, Kingston, New York 12401' required value={address} onChange={e => addressChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{ fontWeight: "bold" }}>Date of Birth</label>
                                        <input type="date" value={dob} onChange={e => dobChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card-footer">
                            <div style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-primary">Register</button> &nbsp;
                                <Link to={'/'} className='btn btn-danger'>Back</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;