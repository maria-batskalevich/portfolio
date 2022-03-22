import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/Title";
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export const Contacts = () => {
    interface IFormInputs {
        name: string;
        email: string;
        message: string;
    }

    const schema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('email is required'),
        message: yup.string().required('Message is required')
    }).required();

    let [notification, setNotification] = React.useState({flag: false, message: 'xxx'})

    const {register, handleSubmit, formState: {errors}, setError} = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (data: IFormInputs, e: any) => {
        emailjs.sendForm('service_h31qkes', 'template_4twbiws', e.target, '3a14yMrBTTLNiPRA0')
            .then((result: { status: number; }) => {
                if (result.status === 200) {
                    e.target.reset()
                    setNotification({flag: true, message: 'The message was sent successfully. Thanks!'})
                    setTimeout(() => {
                        setNotification({flag: false, message: ''})
                    }, 5000)
                } else {
                    setError('name', {type: 'server', message: 'server error'});
                    setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
                    setTimeout(() => {
                        setNotification({flag: false, message: ''})
                    }, 5000)
                }
            })
            .catch(() => {
                setError('name', {type: 'server', message: 'server error'});
                setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
                setTimeout(() => {
                    setNotification({flag: false, message: ''})
                }, 5000)
            })
    }


    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={s.container}>
                <a id={'contacts'}></a>
                <Title title={'Contacts'}/>
                <div className={s.messageSuccess} style={{opacity: notification.flag ? '1' : ''}}>
                    <span>{notification.message}</span>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)} className={s.contactsForm}>
                    <input
                        type="text"
                        className={s.inputArea}
                        placeholder={'Name'}
                        {...register("name",)}
                    />
                    {errors.name && <span className={s.errorMessage}>{errors.name.message}</span>}

                    <input
                        type="text"
                        className={s.inputArea}
                        placeholder={'Email'}
                        {...register("email",)}
                    />
                    {errors.email && <span className={s.errorMessage}>{errors.email.message}</span>}

                    <textarea
                        className={s.textArea}
                        placeholder={'Message'}
                        {...register("message",)}
                        style={{resize: "none"}}
                    />
                    {errors.message && <span className={s.errorMessage}>{errors.message.message}</span>}
                    <button className={s.btn}
                            type='submit'>Send
                    </button>
                </form>


            </div>
        </div>
    )
}
