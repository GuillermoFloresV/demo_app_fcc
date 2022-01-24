//Source code for this comes from: https://github.com/chenkie/next-prisma/blob/main/components/AddContactForm.tsx
import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';

const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};


export default function AddUserForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="First Name"
          name="firstName"
          {...register("message", { required: "Required"})}
        />
        {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Last Name"
          name="lastName"
          {...register("message", { required: "Required"})}
        />
        {errors.lastName && <FormError errorMessage="Last Name is required" />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Username"
          name="username"
          {...register("message", { required: "Required"})}
        />
        <InputSpacer>
        <Input
          placeholder="Tell us about yourself"
          name="biography"
          {...register("message", { required: "Required"})}
        />
        </InputSpacer>

        {errors.email && <FormError errorMessage="Email is required" />}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}