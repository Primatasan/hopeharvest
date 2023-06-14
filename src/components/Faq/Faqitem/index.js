import { 
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import './FaqItem.css'

export default function FaqItem(props){
  return(
    <AccordionItem borderTopWidth={'0'}>
      <AccordionButton  _expanded={{ bg: '#F17456', color: '#FCFCFC'}} className='faq_title'>
        <Box flex='1' textAlign='left' borderTopWidth={'0'}>
          <h3 className='faq_name'>{props.title}</h3>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} className='faq_text'>
        {props.text}
      </AccordionPanel>
    </AccordionItem>
  )
}



