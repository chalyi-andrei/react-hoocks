//@flow
import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import * as Styles from "./styles";

const { Body, Btn, Section, User, Avatar, UserContainer, Row } = Styles;
const API = "https://swapi.co/api/people";

type stateForm = {|
  name: string,
  surName: string,
  age: number | ""
|};

type userType = {
  name: string,
  url: string,
  films: Array<string>
};

const useForm = () => {
  const initialValues: stateForm = { name: "John", surName: "Doe", age: "" };
  const [values, setValues] = useState(initialValues);
  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return [values, handleChange];
};

export default () => {
  const [values, handleChange] = useForm();
  let [users, setUsers] = useState();
  const handleSubmit = () => {
    console.log("values", values);
  };

  useEffect(() => {
    document.title = values.name + values.surName;
  });

  useEffect(() => {
    /*
        Warning: useEffect function must return a cleanup function or nothing. 
        Promises and useEffect(async () => …) are not supported, but you can call 
        an async function inside an effect.

        The effect hook runs when the component mounts but also when the 
        component updates.
        We only want to fetch data when the component mounts. 
        That’s why you can provide an empty array as second argument to the effect 
        hook to avoid activating it on component updates but only for the mounting 
        of the component.
    */
    const fetchData = async () => {
      const res = await fetch(API).then(r => r.json());
      const result: Array<userType> = await res.results;

      console.log("result", result);
      setUsers(result);
    };
    fetchData();

    console.log("useEffect");
  }, []);

  return (
    <Body>
      <Section>
        <Input value={values.name} onChange={handleChange} name="name" />
        <Input value={values.surName} onChange={handleChange} name="surName" />
        <Input
          type="number"
          value={values.age}
          onChange={handleChange}
          name="age"
        />
        <Btn onClick={handleSubmit}>Submit</Btn>
      </Section>

      <Section>
        {users && (
          <UserContainer>
            {users.map(u => (
              <Row>
                <Avatar src="https://www.placecage.com/50/50" />
                <User key={u.name}>{u.name}</User>
              </Row>
            ))}
          </UserContainer>
        )}
        {!users && "Loading..."}
      </Section>
    </Body>
  );
};
