import * as AlertDialog from "@radix-ui/react-alert-dialog";
import s from './alert.module.scss'
import closeIcon from './close.svg'
import {clsx} from "clsx";

export type AlertType = {
    type:string,
    message:string
}

export const Alert = ({type, message}:AlertType) => {

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button style={{color:"black"}}>{type === 'error' ? 'Show Error' : 'Show Completed'}</button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Content className={clsx(s.alert_content, {
                    [s.alert_content_error]: type === 'error',
                    [s.alert_content_completed]: type === 'completed',
                })}>
                    <AlertDialog.Description>
                        {message}
                    </AlertDialog.Description>
                        <AlertDialog.Action asChild>
                            <button className={s.reset_button}><img src={closeIcon} alt="close"/></button>
                        </AlertDialog.Action>

                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
)
}

