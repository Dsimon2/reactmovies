import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";

const Input = styled.input`
  width: 90%;
 padding:20px;
 border-radius: 40px;
 color:grey;
 font-size: 16px;
 position:relative;
 &:focus {
  
 outline-color:#32DE8A;
}
 @media (max-width: 500px) {
  width: 80%;
}
`
const Container = styled.div`
  width:100%
`
const Inputform = styled.form`
margin: 35px;
position:relative

`

const SubmitButton = styled.button`
  position: absolute;
  right: 30px;
  top: 5%;
  cursor: pointer;
  font-size: 35px;
  background: none;
  padding: 9px 12px 0px 15px;
  border: none;
`

function Form({movieSearch}) {

const [form, setForm] = useState({
    searchTerm: ''
})

const handleChange = (e) => {
    console.log(e.target.value)
    setForm({
        ...form,
        searchTerm : e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    movieSearch(form.searchTerm)
}




  return (
    <Container>
      <Inputform onSubmit={handleSubmit}>
      <Input type="text" placeholder="Seach for a movie" value = {form.searchTerm} onChange={handleChange}/>
        <SubmitButton type="submit" value="submit" > <HiOutlineSearch/> </SubmitButton>  
      </Inputform>
    </Container>
  );
}

export default Form;
