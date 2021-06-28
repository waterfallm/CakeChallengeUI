import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useValidateImageURL } from "use-validate-image-url";

import qryCakes from '../../queries/useCakes';
import qryCakesid from '../../queries/useCakesid';
import { addnew } from '../../requests'

// import CakeItem from '../CakeItem';
import { ICake } from '../../types'

import {

  Container,
  Title,
  Form,

  Input,
  InputBox,

  InputHeader,
  InputWraper,
  Button,
  Link

} from './styles';



const Addnew: React.FC = () => {

  const history = useHistory();

  const [name, setName] = useState("Cake Name");
  const [comment, setComment] = useState("Comment(Max 200 chars)");

  const [imageUrl, setImageUrl] = useState("Image URL");
  const [yumFactor, setYumFactor] = useState(1);
  const [charCount, setCharCount] = useState(0);


  const [url, setURL] = React.useState('');
  const status = useValidateImageURL(url);

  function handleSubmit(e: React.FormEvent) {

    e.preventDefault()

    console.log("-->Submit")
    //code code



    setURL(imageUrl)
    console.log(status)
    addnew(name, comment, imageUrl, yumFactor)

    history.push("/");


  }




  // function handleChangeComment(e: React.ChangeEvent) {
  //   //BTC Details
  //   e.preventDefault()


  //   if (comment.length > 200) {
  //     console.log("Too Big")
  //   } else {

  //     // setComment(e.target.value)
  //   }

  // }




  return (

    <Container>
      <Title>Add New Cake</Title>
      < Form onSubmit={handleSubmit} >
        <InputWraper>
          <InputHeader>Enter Details for new Cake</InputHeader>
          <InputBox>
            <label>
              Name:
              <Input required id="name" type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            </label>

          </InputBox>
          <InputBox>
            <label>
              Comment:
              <Input required type="text" value={comment} maxLength={200} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} />
              Chars left:{200 - comment.length}
            </label>

          </InputBox>
          <InputBox>
            <label>
              Image URL:
              <input required type="url" value={imageUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} />


              {status === 'invalid' ? <p>Image URL is not valid.</p> : null}
              {status === 'valid' ? <p>Image URL is valid.</p> : null}
              {status === 'progress' ? <p>Image URL validity is in progress.</p> : null}

            </label>

          </InputBox>
          <InputBox>
            <label>
              Yum Factor:
              <Input required type="number" value={yumFactor} min="1" max="5" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYumFactor(parseInt(e.target.value))} />
            </label>

          </InputBox>





        </InputWraper>

        <Button>
          Submit
        </Button>

      </Form>








    </Container>

  );

}
export default Addnew;
