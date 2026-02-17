import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo4 = () => {
const {register,handleSubmit,formState:{errors}}=useForm();
console.log("errors...",errors);


const validatorschema = {
  namevalidator:{
    required:{
      value:true,
      message:"name is require"
    }
  },
  agevalidator:{
    required:{
      value:true,
      message:"age is require"
    },
    min:{
      value:18,
      message:"put more than 18"   
    },
    max:{
      value:60,
      message:"put below than 60"
    }
  },
  addressvalidartor:{
    required:{
      value:true,
      message:"address is require"
    },
    minLength:{
      value:10,
      message:"minimum 10 character require"
    },
    maxLength:{
      value:30,
      message:"maximum 30 character allowed"
    }
    
  },contactvalidator:{
    required:{
      value:true,
      message:"contact is require"
    },
    pattern:{
      value:/[6-9]{1}[0-9]{9}$/,
      message:"invalid contact"
    }
  },
  promocodevalidator:{
    required:{
      value:true,
      message:"promocode is required"
    },
    // param is a user define function
    validate:(params)=>{
      return params ==  2026 || "enter valid promocode"
    //if we use && after any statement that they tell if first statement is right then print next
    // in other case we use  || after any statement then they says if first statement is false then print next one
    }
  },
  hobbiesvalidator:{
    required:{
      value:true,
      mesaage:'hobbies are required'
    },
    validate:(params)=>{
      //params is a array in terms of selectefd a hobbies
      return params?.length>=2 || "minimum two hobbies are requied"
    }
  },
  // passwordvalidator:{
  //   required:{
  //     value:true,
  //   message:"passsword is required"
  // },
  // conformpasswordvalidator:{
  //   required:{
  //     value:true,
  //     message:"conform password required"
  //   },
  //   validate:(params)=>{
  //     params ==password || "conform passwors is not matched"
  //   }
  // }
}


const submitHandler = (data) =>{
  // alert("form is submitted");
  conaole.log(data);
}

  return (
    <div>
      <div style={{textAlign:'center'}}>
        <h1>FormDemo4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:</label>
          <input type='text' placeholder='enter your name' {...register("name",validatorschema.namevalidator)}></input>
          {errors.name && errors.name.message} 
        </div>

        <div>
          <label>age:</label>
          <input type='text' {...register("age",validatorschema.agevalidator)}></input>
          {errors.age && errors.age.message}
        </div>

        <div>
          <label>address:</label>
          <input type='text' {...register("address",validatorschema.addressvalidartor)}></input>
          {errors.address && errors.address.message}
        </div>
        <div>
          <label>contact no:</label>
          <input type='text' {...register("contact",validatorschema.contactvalidator)}></input>
          {errors.contact && errors.contact.message}
        </div>
        <div>
          <label>promocode</label>
          <input type='text' {...register("promocode",validatorschema.promocodevalidator)}/>
          {errors.promocode && errors.promocode.message}
        </div>
        <div>
          <label>hobbies---</label>
          cricket:<input type='checkbox'{...register("hobbies")} value="cricket"/>
          watchMovies:<input type='checkbox'{...register("hobbies")} value="watchMovie"/>
          readingBooks:<input type='checkbox'{...register("hobbies")} value="readingBook"/>
           {errors.hobbies && errors.hobbies.message}
        </div>
        {/* <div>
          <laebel>passsword:</laebel>
          <input type='passsword'{...register("password",validatorschema.passwordvalidator)}/>
          {errors.password && errors.password.message}
        </div>
        <div>
          <laebel>conform password:</laebel>
          <input type='password' {...register("conformpassword",validatorschema.conformpasswordvalidator)}/>
          {errors.conformpassword && errors.conformpassword.message}
        </div> */}
         
        <div>
        <input type='submit'></input>
        </div>
        </form>
      </div>
     </div>
    
  );
};
