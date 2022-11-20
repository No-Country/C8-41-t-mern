import { useForm } from "react-hook-form";

const CreateProduct = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <span> Nombre </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
        <label>
            <span> Imagen </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
        <label>
            <span> Material </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
        <label>
            <span> Descripcion </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
        <label>
            <span> Precio </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
        <label>
            <span> Demora </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
        <label>
            <span> Vendidos </span>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
      
      
      
      
      
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  )
}

export default CreateProduct