import React from "react";
import style from "./ContactFrom.module.css";
import Button from "../Button";
import { TbMessageDots } from "react-icons/tb";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const ContactForm = () => {
    return (
        <div className={style.flexDiv}>
            <div className={style.formDiv}>
                <div className="flex  justify-between my-6">
                    <Button text="Via Support Chat" icon={<TbMessageDots />} />
                    <Button text="Via Call" icon={<FaPhone />} />
                </div>

                <Button isOutline={true} text="Via Email" icon={<AiTwotoneMail />} />

                <form >
                    <div className={style.formLabelHandle}>
                        <label htmlFor="name"> Name</label>
                        <input type="text" className="outline" name="name" />
                    </div>

                    <div className={style.formLabelHandle}>
                        <label htmlFor="email"> E-mail</label>
                        <input type="email" className="outline" name="email" />
                    </div>

                    <div className={style.formLabelHandle}>
                        <label htmlFor="text"> Text</label>
                        <textarea rows='5' className="outline" name="text" />
                    </div>

                    <button className="' my-4 float-end px-10 py-1 text-center bg-black text-white rounded-sm cursor-pointer active:scale-101'" >Submit Button</button>
                </form>
            </div>
            <div className={style.imgDiv}>
                <img src="public\Service 24_7-pana 1.svg" alt="" />
            </div>
        </div>
    );
};

export default ContactForm;
