import { toast } from 'react-toastify';

export function ToastAlerta(message: string, type: string) {
    switch (type) {
        case 'sucesso':
            toast.success(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                style: {
                    background: '#32435f',
                }
            });
            break;

        case 'info':
            toast.info(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                style: {
                    background: '#8f8681',
                }
            });
            break;

        case 'erro':
            toast.error(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                style: {
                    background: '#8e412e',
                }
            });
            break;

        default:
            toast.info(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            break;
    }
}