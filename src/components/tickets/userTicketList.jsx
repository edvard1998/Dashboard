import { useSelector } from 'react-redux';
import { selectTotalValues } from '@/redux/silces/calendarSlice';
import { Box } from '@wix/design-system';
import UserTicketItem from './userTicketItem'

const UserTicketList = () => {
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
          <UserTicketItem 
            key={index}
            index={index}
            ticket={ticket}
          />
        ))
      }
    </Box>
  )
}

export default UserTicketList;