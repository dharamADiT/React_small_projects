import style from "./ContactFrom.module.css";
import Button from "../Button";
import { TbMessageDots } from "react-icons/tb";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
//    const [newData, setnewData] = useState({})
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // setnewData(data)
      
    // alert("Form submitted!", data);
    console.log(data)
    reset()
    alert("data will comes in console only  ")
  };
  

  return (
    <div className={style.flexDiv}>
      <div className={style.formDiv}>
        <div className="flex  justify-between my-6">
          <Button text="Via Support Chat" icon={<TbMessageDots />} />
          <Button text="Via Call" icon={<FaPhone />} />
        </div>

        <Button isOutline={true} text="Via Email" icon={<AiTwotoneMail />} />

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={style.formLabelHandle}>
            <label htmlFor="name"> Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="outline"
              name="name"
            />
             {errors.name && <span>This field is required</span>}
          </div>

          <div className={style.formLabelHandle}>
            <label htmlFor="email"> E-mail</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="outline"
              name="email"
            />
             {errors.email && <span>This field is required</span>}

          </div>

          <div className={style.formLabelHandle}>
            <label htmlFor="text"> Text</label>
            <textarea
              {...register("textContent")}
              rows="5"
              className="outline"
              name="text"
            />
             {errors.textContent && <span>This field is required</span>}

          </div>

          <button type="submit" className="my-4 float-end px-10 py-1 text-center bg-black text-white rounded-sm cursor-pointer active:scale-107">
            Submit Button
          </button>
        </form>
      </div>
      <div className={style.imgDiv}>
        <img src="public\Service 24_7-pana 1.svg" alt="" />
      </div>
   
    </div>
  );
};

export default ContactForm;
