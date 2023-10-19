import { useDispatch, useSelector } from 'react-redux';
import { Form, Label } from './ContactForm.styled';
import { addContact, getContact } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactItems = useSelector(getContact);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const addNewContact = data => {
    const normalizedName = data.name.toLowerCase();

    if (contactItems.find(item => item.name.toLowerCase() === normalizedName)) {
      return alert`${data.name} is already in contacts`;
    }
    dispatch(addContact(data));
  };

  return (
    <Form onSubmit={handleSubmit(addNewContact)}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          {...register('name')}
        ></input>
        {errors.name && <div>{errors.name?.message}</div>}
      </Label>
      <Label>
        Numder
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          {...register('number')}
        ></input>
        {errors.name && <div>{errors.name?.message}</div>}
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
};
