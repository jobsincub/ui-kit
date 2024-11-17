import s from './textarea.module.scss'

type TextareaType = {
    labelText?:string;
    placeholder?: string;
    disabled?: boolean;
    variant?: string;
    error?: boolean;
    errorText?: string
};

export const Textarea = ({ disabled, variant, placeholder, labelText, error, errorText}:TextareaType) => {
    return (
        <div className={s.container}>
            <label className={`${s.labelTextArea} ${disabled ? s.disabledLabel : ''}`} >{labelText}</label>
            <textarea className={`${s.textarea} ${error ? s.error : ''}`}
                      placeholder={placeholder}
                      disabled={disabled}
                      data-variant={variant} />
            {error ? <label className={s.errorText}> {errorText} </label> : ''}
        </div>
    )
}