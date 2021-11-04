import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ContactService from '../services/ContactService'

const ListContactsComponent = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getAllContacts()
    }, [])

    const getAllContacts=() =>{
        ContactService.getAllContacts().then((response) => {
            setContacts(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error)
        })
    }

    const deleteContact = (contactId) => {
        console.log(contactId)
        ContactService.deleteContact(contactId).then((response) =>{
            getAllContacts()
        }).catch(error =>{
            console.log(error)
        })
    }
    return (  
        <div className = "container">
            <h2 className = "text-center">Contacts</h2>  
            <Link to = "/add-contact" className = "btn btn-primary mb-1" >Add Contact</Link>

            
            <table className = "table table-bordered table-striped">
                <thead>
                    <th>Contact id</th>
                    <th>Full Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        contacts.map(
                            contact => 
                            <tr key = {contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.fullName}</td>
                                <td>{contact.company}</td>
                                <td>{contact.phoneNumber}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <Link className= "btn btn-success" to={`/update-contact/${contact.id}`}>Update</Link>
                                    <button className="btn btn-outline-danger" onClick = {() => deleteContact(contact.id)} style={{marginLeft: "10px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListContactsComponent

