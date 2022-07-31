import React, {FC, useState} from "react"
import closeIcon from '../../img/close_48124.png'
import {FormInput} from "./FormInput"

type PopupresponsePropsType = {
    setIsResponseMode: (value: boolean) => void
}

export const PopupResponse: FC<PopupresponsePropsType> = ({setIsResponseMode}) => {

    const closePopupHandler = () => {
        setIsResponseMode(false)
    }

    const setIsAgreeHandler = () => {
        setIsAgree(!isAgree)
    }

    const [surname, setSurname] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [patronymic, setPatronymic] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [isAgree, setIsAgree] = useState<boolean>(false)

    return (
        <div className="popup-wrapper">
            <div className="popup-content">
               <div className="popup-header">
                   <div className="popup-header_title">
                       Откликнуться
                   </div>
                   <div
                       className="popup-header_button"
                       onClick={closePopupHandler}
                   >
                       <img src={closeIcon} alt="Закрыть"/>
                   </div>
               </div>
               <div className="popup-form">
                   <FormInput
                       placeholder="Фамилия"
                       label='Фамилия'
                       name='surname'
                       type='text'
                       value={surname}
                       onChange={setSurname}
                   />
                   <FormInput
                       placeholder="Имя"
                       label='Имя'
                       name='name'
                       type='text'
                       value={name}
                       onChange={setName}
                   />
                   <FormInput
                       placeholder="Отчество"
                       label='Отчество'
                       name='patronymic'
                       type='text'
                       value={patronymic}
                       onChange={setPatronymic}
                   />
                   <FormInput
                       placeholder="Телефон"
                       label='Телефон'
                       name='phone'
                       type='tel'
                       value={phone}
                       onChange={setPhone}
                   />
                   <div className="popup-agreements">
                       <input
                           type="checkbox"
                           className="popup-agreements_checkbox"
                           checked={isAgree}
                           onChange={setIsAgreeHandler}
                       />
                       <div className="popup-agreements_text">
                           Я даю согласие на обработку своих персональных данных в соответствии с <a href="#" className="popup-agreements_special">
                           положением об обработке персональных данных.
                       </a>
                       </div>
                   </div>
                   <button
                       className={isAgree ? "popup-button" : "popup-button_disable"}
                       disabled={!isAgree}
                   >
                       Откликнуться
                   </button>
               </div>
            </div>
        </div>
    )
}
