import React, { useState } from 'react';
import qryCakes from '../../queries/useCakes';
import qryCakesid from '../../queries/useCakesid';

import { ICake } from '../../types'

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

const Cake: React.FC<{ cake: ICake }> = ({ cake }) => {










  return (




    <Container>

      {
        cake &&


        <div>
          <Title>{cake.name}</Title>
          <p>{cake.comment}</p>

          <label >Yum Factor:{cake.yumFactor}</label>
          <meter id="Yum" value={cake.yumFactor} min="0" max="5"> {cake.yumFactor} out of 5</meter><br></br>
          {/* <p>Yum Factor:{cake.yumFactor}</p> */}
          {/* {cake.imageUrl} */}
          <Image src={cake.imageUrl} alt="" />
        </div>

      }

      {/* <Title>Cakes {cakeidx} /
          {
            cakelist ? cakelist.length : 0
          }

        </Title>

        <label>CakeID(
          {
            activecake ? activecake.id : 0
          }
          )
        </label>

        <label>CakeName(
          {
            activecake ? activecake.name : 0
          }
          )
        </label>
        <label>CakeComment(
          {
            activecake ? activecake.comment : 0
          }
          )
        </label>
        <Image>CakePicture
          <img src=
            {
              activecake ? activecake.imageUrl : 0
            }
            alt="" />
        </Image>

        <label>CakeYumYum(
          {
            activecake ? activecake.yumFactor : 0
          }

          )
        </label> */}
      {/* <Form onSubmit={handlePrevious}>



          <Button type="submit">Previous</Button>
        </Form>
        <Form onSubmit={handleDelete}>



          <Button type="submit">Delete</Button>
        </Form>
        <Form onSubmit={handleNext}>



          <Button type="submit">Next</Button>
        </Form> */}
      <Link to={`/`}>Cake List</Link>
    </Container>

  );

}
export default Cake;
