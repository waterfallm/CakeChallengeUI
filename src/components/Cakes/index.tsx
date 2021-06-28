import React, { useState } from 'react';
import qryCakes from '../../queries/useCakes';
import qryCakesid from '../../queries/useCakesid';

import CakeItem from '../CakeItem';
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

const Cakes: React.FC = () => {


  const { data: cakelist } = qryCakes();


  return (


    < div >


      <Container>

        {cakelist?.map(cake => (

          <CakeItem cake={cake} > </CakeItem>


        )
        )}

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

        <Link to={`/addnew/`}>AddNew</Link>
      </Container>



    </div >
  );

}
export default Cakes;
