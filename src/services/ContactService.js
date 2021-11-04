import axios from "axios";

const CONTACT_REST_API_URL = "http://localhost:8080/api/v1/contacts";

class ContactService{
    getAllContacts(){
        return axios.get(CONTACT_REST_API_URL)
    }

    createContact(contact){
        return axios.post("http://localhost:8080/api/v1/contacts/create", contact)
    }

    getContactById(id){
        return axios.get("http://localhost:8080/api/v1/contacts/find/" + id)
    }
    updateContact(contactId, contact){
        return axios.put("http://localhost:8080/api/v1/contacts/update/" + contactId, contact)
    }
    deleteContact(contactId){
        return axios.delete("http://localhost:8080/api/v1/contacts/delete/" + contactId)
    }
}
export default new ContactService();