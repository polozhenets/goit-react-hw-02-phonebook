import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({contacts,filterHandler}) =>{
    return(
        <>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={filterHandler}
        />
        <ul>
            {contacts.map(item=><ContactItem key={item.id} name={item.name} number={item.number}/>)}
        </ul>
        </>
    )
}