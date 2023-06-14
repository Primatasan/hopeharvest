import { useToast } from '@chakra-ui/react'
import { FaBell } from "react-icons/fa";
import { Icon } from '@chakra-ui/react'
import './AlertButton.css'

export default function AlertButton(){

    const toast = useToast()

    return(
        <>
            <button className='button_alert' onClick={() =>
                toast({
                  title: 'Função não implementada',
                  status: 'error',
                  duration: 4000,
                  isClosable: true,
                })
            }
            >
                <Icon as={FaBell} w={4} h={4} color='white' className='button_icon' />
                Marcar Doações Proximas
            </button>
        </>
    )
}