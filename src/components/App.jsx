import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Section } from "./Section/Section";


export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:""
  }

  unique = (item) =>{
    const {contacts} = this.state;
    for (const element of contacts) {
      if(item.name === element.name || item.number === element.number){
        alert("Repeatable contact");
        return false;
      }
    }
    return true;
  } 

  formHandler = (e) =>{

    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const newItem = {
      id:nanoid(3),
      name: formElements.name.value,
      number: formElements.number.value,
    }
    if(this.unique(newItem)){
      const newContacts = [...this.state.contacts,newItem]
      this.setState({
        contacts:newContacts
      })
    }
    e.target.reset();
  }



  filterHandler = (e) => {
    this.setState({
      filter:e.target.value
    })
  }
   getFilteredList = () =>{
    if(this.state.filter ===""){
      return this.state.contacts;
    }
    return this.state.contacts.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase().trim()));

   }
  render(){
    console.log("render",this.state);
    return (
      <div
        style={{
          width: '100vh',
          display: 'block',
          color: '#010101',
          margin:'0 auto'
        }}
      >
     <Section title={"Phonebook"}>
      <ContactForm formHandler={this.formHandler} />
      </Section>
      <Section title={"Contacts"}>
        <ContactList contacts={this.getFilteredList()} filterHandler={this.filterHandler}/>
      </Section>
      </div>
    );
  }
};
