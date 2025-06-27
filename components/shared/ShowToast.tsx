import { toast } from 'react-toastify';

interface IShowToast {
    type: "success" | "error";
    message: string;
}

const ShowToast = ({type, message}: IShowToast) => {
  if(type == "success") {
    return(
        toast.success( message, {
          position: 'top-right',
          style: {backgroundColor: "green", color: "black"}
        })
    )
  }else if(type == "error") {
    return(
        toast.error(message, {
          position: 'top-right',
          style: {backgroundColor: "pink", color: "red"}
        })
    )
  }
  return null;
}

export default ShowToast;


