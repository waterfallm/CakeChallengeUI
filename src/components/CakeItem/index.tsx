import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import qryCakes from '../../queries/useCakes';


import { ICake } from '../../types';
import { deletecake } from '../../requests';

import {

  Container,
  Title,
  Form,
  Image,
  Group,
  Label,
  InputGroup,
  Select,
  Input,
  InputLabel,
  Button,
  Link

} from './styles';



const CakeItem: React.FC<{ cake: ICake }> = ({ cake }) => {

  const history = useHistory();


  function handleSubmit(e: React.FormEvent) {

    e.preventDefault()
    console.log("-->Submit")
    //code code
    console.log(cake.id)
    deletecake(cake.id)
    history.push("/");

  }

  return (

    <Container>
      < Form onSubmit={handleSubmit} >
        <Link
          to={`/cake/${cake.id}`}>
          <p>{cake.id}</p>
          <p>{cake.name}</p>

          <p>{cake.yumFactor}</p>
          <Image src={cake.imageUrl} alt="" />

        </Link>
        <Button type="submit">Delete</Button>
      </Form>
    </Container>


  );

}

export default CakeItem;
