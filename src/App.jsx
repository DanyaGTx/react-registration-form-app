import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { addUserToDataList, fetchFindSuggestions } from './redux/userDataSlice';

import FirstName from './components/FirstName/FirstName';
import LastName from './components/LastName/LastName';
import Telephone from './components/Telephone/Telephone';
import Email from './components/Email/Email';
import Gender from './components/Gender/Gender';
import UserList from './components/UserList/UserList';
import Address from './components/Address/Address';
import DataProcessingCheckBox from './components/DataProcessingCheckbox/DataProcessingCheckBox';
import ButtonSubmit from './components/ButtonSubmit/ButtonSubmit';


import styled from 'styled-components';



const AppWrapper = styled.div`
max-width: 600px;
margin: 0 auto;
text-align: left;

`


function App() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.usersDataList)
  const locationState = useSelector((state) => state.users.location)
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onSubmit'});
   

  const onSubmit = (data) => {
    reset();
    setAdress('');
    dispatch(addUserToDataList(data));
    
  }

  const [adress,setAdress] = useState('');

  const handleChangeAdress = (e) =>{
    setAdress(e.target.value)
  } 

  const onClickOnSuggestion = (location) =>{
    setAdress(location)
  }

 

  const findSuggestionFor = (adress) =>{
      dispatch(fetchFindSuggestions(adress))
  }

  useEffect(() =>{
    findSuggestionFor(adress)
  },[adress])
  return (
    <AppWrapper>
      <h1>Registration User</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FirstName register={register} errors={errors} />
        <LastName  register={register} errors={errors} />
        <Telephone register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <Gender register={register} errors={errors}/>
        <Address 
        register={register} 
        errors={errors} 
        handleChangeAdress={handleChangeAdress}
        adress={adress}
        locationState={locationState}
        onClickOnSuggestion={onClickOnSuggestion}
        />
        <DataProcessingCheckBox register={register} errors={errors}/>

        <ButtonSubmit />
      </form>
      <UserList users={users} />
    </AppWrapper>
  );
}

export default App;
