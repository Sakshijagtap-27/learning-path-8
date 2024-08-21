import './App.css';
import { v4 as uuid } from "uuid";
import React, {useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App(){
const KEY = "contacts";
const [contacts, setContacts] = useState( JSON.parse(localStorage.getItem(KEY)) ?? []);

const addContactHandler = (contact)=>{
  console.log(contact);
  setContacts([...contacts,{id:uuid(), ...contact}]);
};

const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  });
}
//for localstorage shit
/*useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem(KEY));
  if(retriveContacts) setContacts(retriveContacts);
  },[]);*/
  
useEffect(()=>{
localStorage.setItem(KEY,JSON.stringify(contacts));
},[contacts]);

  return (
    <div className='ui container'>
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
    </div>
   
  );

}
export default App;
