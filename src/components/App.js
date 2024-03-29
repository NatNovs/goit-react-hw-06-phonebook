import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => (

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Section title="Phonebook">
        <ContactForm/>
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList/>
      </Section>
    </div>
  );


export default App;