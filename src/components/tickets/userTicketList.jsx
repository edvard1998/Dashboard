import { useSelector } from 'react-redux';
import { selectTotalValues } from '@/redux/silces/calendarSlice';
import { Box } from '@wix/design-system';
import UserTicket from './userTicketItem'

const UserTickets = () => {
  const tickets = useSelector(selectTotalValues);

  return (
    <Box 
      direction="horizontal" 
      gap="36px" 
      maxWidth={'1368px'} 
      width={'100%'}
    >
      {
        tickets.map((ticket, index) =>  (
          <UserTicket 
            key={index}
            index={index}
            ticket={ticket}
          />
        ))
      }
    </Box>
  )
}

export default UserTickets;