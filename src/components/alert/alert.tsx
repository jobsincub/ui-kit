import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Alert = () => {

    return (
        <AlertDialog.Root >
            <AlertDialog.Trigger />
            <AlertDialog.Portal>
                <AlertDialog.Overlay />
                <AlertDialog.Content>
                    <div>Hello world</div>
                    <AlertDialog.Title title={'wsup'}/>
                    <AlertDialog.Description />
                    <AlertDialog.Cancel />
                    <AlertDialog.Action />
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}
