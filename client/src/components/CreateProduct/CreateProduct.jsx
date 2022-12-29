import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const CreateProduct = () => {
  
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/sergio-developer/image/upload'
  const CLOUDYNARY_UPLOAD_PRESET = 'ywwwtssl';

  let newProducto = {
    name: "",
    image: "",
    materials: "",
    description: "",
    price: "",
    delay: "",
    sold: "",
  };

  const [producto, setProducto] = useState(newProducto);
  const [hidden, setHidden] = useState(true);
  const [urlImage, setUrlImage] = useState('');
  const [alerta, setAlerta] = useState("");

  const handleInput = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleImage = async (e) => {
    try {
      const file = e.target.files[0];
      // console.log(file)
      
      let formData = {
        file: file,
        upload_preset: CLOUDYNARY_UPLOAD_PRESET
      }
        // console.log(formData)
     const resp = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(resp)
     setUrlImage(resp.data.secure_url);
       setProducto({
      ...producto,
      ["image"]: resp.data.secure_url,
    });
      console.log("url image is "+ urlImage);
      setHidden(false);
      console.log(producto);
    } catch (error) {
      console.log(error)
      
    }
    // console.log(file)
    // setProducto({
    //   ...producto,
    //   [e.target.name]: e.target.value,
    // });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    let respuesta;
    let { name, image, materials, description, price, delay, sold } = producto;
    console.log(image)
    if (
      [name, image, materials, description, price, delay, sold].includes("")
    ) {
      setAlerta(
        <h3 className="alert alert-danger" role="alert">
          Todos los campos son obligatorios
        </h3>
      );
      setTimeout(() => {
        setAlerta("");
      }, 3000);

      return;
    } else {
      
      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, producto)
        .then((resp) => (respuesta = resp.data.name));

      Swal.fire({
        position: "center",
        icon: "success",
        title: `El producto ${respuesta} fue creada de forma exitosa`,
        showConfirmButton: false,
        timer: 2500,
      });
      setProducto(
        (newProducto = {
          name: "",
          image: "",
          materials: "",
          description: "",
          price: "",
          delay: "",
          sold: "",
        })
      );
      setUrlImage("");
      setHidden(true);
    }
  };

  return (
    <div className="login__container" style={{ marginBottom: "40px" }}>
      <form
        onSubmit={handleSubmit}
        className="login__card"
        style={{ marginTop: "50px" }}
      >
        <h2 className="login__title">Create product!</h2>
        {alerta}
        <div className="login__field">
          {/* <i className="input-icon fa-solid fa-user"></i> */}
          <input
            // {...register("name")}
            //test
            value={producto.name}
            autoComplete="on"
            placeholder="Product Name"
            className="login__input-field"
            type="text"
            name="name"
            onChange={handleInput}
            // required={true}
          />
          {/* <i className="input-icon fa-solid fa-user"></i>

          <input
            {...register("lastname")}
            autoComplete="on"
            placeholder="Last Name"
            className="login__input-field"
            type="text"
            id="lastname"
          /> */}
        </div>

        <div className="login__field" hidden={!hidden}>
          {/* <svg
            className="input-icon"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
          </svg> */}
          <input
            // {...register("image")}
            autoComplete="on"
            placeholder="Insert image or url"
            className="login__input-field"
             type={hidden? "file": "hidden"}
            // accept=".png, .jpg, .jpeg"
            id="image_upload"
            value={null}
            name="image_upload"
            onChange={handleImage}
            // required={true}
            hidden={!hidden}
            disabled={hidden? false: true}
            
          />
        </div>
        <div className="login__field" hidden={hidden}>
          {/* <svg
            className="input-icon"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
          </svg> */}
          <input
            // {...register("image")}
            //autoComplete="on"
            placeholder="Url image"
            className="login__input-field"
             type="text"
            // accept=".png, .jpg, .jpeg"
            id="image"
            value={urlImage}
            name="image"
            //onChange={handleSetUrl}
            readonly
            hidden={hidden}
            // required={true}
            
          />
        </div>
        <div className="login__field">
          {/* <svg
            className="input-icon"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
          </svg> */}
          <input
            // {...register("materials")}
            autoComplete="off"
            type="text"
            placeholder="Materials"
            className="login__input-field"
            name="materials"
            id="materials"
            value={producto.materials}
            onChange={handleInput}
            //  required={true}
          />
        </div>
        <div className="login__field">
          {/* <i className="input-icon fa-solid fa-phone"></i> */}
          <input
            // {...register("description")}
            autoComplete="off"
            type="text"
            placeholder="Description at Mask"
            className="login__input-field"
            name="description"
            id="description"
            value={producto.description}
            onChange={handleInput}
            // required={true}
          />
        </div>
        <div className="login__field">
          {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
          <input
            // {...register("price")}
            autoComplete="on"
            placeholder="Price of product"
            className="login__input-field"
            type="number"
            id="price"
            value={producto.price}
            name="price"
            onChange={handleInput}
            // required={true}
          />
        </div>
        <div className="login__field">
          {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
          <input
            // {...register("delay")}
            autoComplete="on"
            placeholder="Estimated time"
            className="login__input-field"
            type="text"
            id="delay"
            value={producto.delay}
            name="delay"
            onChange={handleInput}
            // required={true}
          />
        </div>
        <div className="login__field">
          {/* <i className="input-icon fa-solid fa-calendar-days"></i> */}
          <input
            // {...register("sold")}
            autoComplete="on"
            placeholder="Quantity sold"
            className="login__input-field"
            type="number"
            id="sold"
            value={producto.sold}
            name="sold"
            onChange={handleInput}
            // required={true}
          />
        </div>

        <button
          type="submit"
          className="products__list-item__content-btn__details login__btn"
        >
          Create Product
        </button>
        {/* <a href="#" className="login__btn-link">
          Already got an account?
        </a> */}
        <i class="register__icon1 register__icon fa-solid fa-masks-theater"></i>
        <i class="register__icon2 register__icon fa-solid fa-masks-theater"></i>
        <i class="register__icon3 register__icon fa-solid fa-masks-theater"></i>
        <i class="register__icon4 register__icon fa-solid fa-masks-theater"></i>
      </form>
    </div>
  );
};

export default CreateProduct;
