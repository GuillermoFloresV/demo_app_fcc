import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

// Create your functional component:
export default function Count() {
  // And now you can use hooks
  // But only inside your functional component's
  // body
  const [count, setCount] = useState(0);
  const { register, handleSubmit, watch, formState: { errors } } = useForm(); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

{      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input/>
      {/* errors will return when field validation fails  */}
      <input type="submit" />
    </form>
    </div>

    
  );
}