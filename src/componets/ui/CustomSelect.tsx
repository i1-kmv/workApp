import React, {FC, useState} from "react"
import arrow from "../../img/drop-down-arrow.png"

type CustomSelectPropType = {
    placeholder: string
    value: string
    onChange: (val: string) => void
    list: Array<string>
    label: string
}


export const CustomSelect: FC<CustomSelectPropType> = ({placeholder, value, onChange, list, label}) => {

    const [isSelectMode, setIsSelectMode] = useState<boolean>(false)

    const setIsSelectModeHandler = (val: boolean) => {
        setIsSelectMode(val)
    }

    const toggleIsSelectModeHandler = () => {
        setIsSelectMode(!isSelectMode)
    }

    const onSelectItemClickHandler = (val: string) => {
        onChange(val)
        setIsSelectMode(false)
    }

    return (
        <div className="select-wrapper">
            <div className="select-label">
                {label}
            </div>
            {!isSelectMode ?
                <span
                    className={value ? "select-text_strong" : "select-text"}
                    onClick={() => setIsSelectModeHandler(true)}
                >
                    {value ? value : placeholder}
                </span>
                :
                <input
                    type="text"
                    placeholder={placeholder}
                    className="select-input"
                    value={value}
                    onChange={(e) => onChange(e.currentTarget.value)}
                />
            }
            <img
                src={arrow}
                alt="bottom-arrow"
                className={!isSelectMode ? "select-arrow" : "select-arrow_top"}
                onClick={toggleIsSelectModeHandler}
            />
            {isSelectMode &&
            <div className="select-list">
                <ul>
                    {list.filter(el => el.toLowerCase().includes(value.toLowerCase())).map(el =>
                        <li
                            className="select-item"
                            onClick={() => onSelectItemClickHandler(el)}
                        >
                            {el}
                        </li>)}
                </ul>
            </div>
            }
        </div>
    )
}
