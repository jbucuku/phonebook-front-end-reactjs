import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import ContactService from '../services/ContactService'

const AddContactComponent = () => {
    const [fullName, setFullName] = useState('')
    const [company, setCompany] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateContact = (e) => {
        e.preventDefault();

        const contact = {fullName, company, phoneNumber, email}

        if(id){

            ContactService.updateContact(id,contact).then((response) =>{
                history.push('/contacts')
            }).catch(error => {
                console.log(error)
            })
        }else{
            ContactService.createContact(contact).then((response) => {
                console.log(response.data)
    
                history.push("/contacts");
            }).catch(error => {
                console.log(error)
            })
        }
}

useEffect(() => {
    ContactService.getContactById(id).then((response) =>{

        console.log(response.data)

        setFullName(response.data.fullName)
        setCompany(response.data.company)
        setPhoneNumber(response.data.phoneNumber)
        setEmail(response.data.email)

    }).catch(error => {
        console.log(error)
    })
 }, [])
 

 const title = () =>{
     if(id){
         return <h1 className="text-center"> Update Contact </h1>
     }else{
        return <h1 className="text-center"> Add new Contact </h1>
     }
 }
    return (
        <div>
            <div className = "container">
                <div className="row">
                    <div className="border border-primary card col-md-6 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Full Name</label>
                                    <input 
                                    type="text"
                                    placeholder="Insert your name"
                                    name="fullName"
                                    className= "border border-primary form-control"
                                    value= {fullName}
                                    onChange = {(e) => setFullName(e.target.value)}>
                                     </input>
                                </div>
                                
                                <div className="form-group mb-2">
                                    <label className="form-label">Company</label>
                                    <input 
                                    type="text"
                                    placeholder="Your company"
                                    name="company"
                                    className= "border border-primary form-control"
                                    value= {company}
                                    onChange = {(e) => setCompany(e.target.value)}>
                                     </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Phone Number </label>
                                    <input 
                                    type="text"
                                    placeholder="Your phone number"
                                    name="phoneNumber"
                                    className= "border border-primary form-control"
                                    value= {phoneNumber}
                                    onChange = {(e) => setPhoneNumber(e.target.value)}>
                                     </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Email </label>
                                    <input 
                                    type="text"
                                    placeholder="Your email"
                                    name="email"
                                    className= "border border-primary form-control"
                                    value= {email}
                                    onChange = {(e) => setEmail(e.target.value)}>
                                     </input>
                                </div>
                                <button className = "btn btn-primary " onClick= {(e) => saveOrUpdateContact(e)}>Submit</button>
                                <Link to="/contacts" className="btn btn-outline-warning m-2">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default AddContactComponent
