import { Card, Box, Heading, Text } from '@wix/design-system';
import { ArrowDownSmall, ArrowUpSmall } from '@wix/wix-ui-icons-common';
import userTicketStyle from "@/styles/user-tickest.module.css";

const UserTicket = props => {
  if (props.ticket && props.index + 1) {
    return (
      <Card verticalAlign="top" className={userTicketStyle["user-ticket"]}
      > 
        <Box 
          direction="vertical" 
          gap={"16px"} 
          verticalAlign="top"
          height={"146px"}
          borderRadius={"8px"}
          padding={"18px 24px"}
        >
          <Text size="medium" secondary>
            { props.ticket.name }
          </Text>
          <Box gap={"16px"}>

            <Heading size="large" weight="bold">{ props.ticket.totalValue }</Heading>
            <Box 
              align="center"
              verticalAlign="middle"
              border="1px solid"
              borderColor={ props.index % 2 === 0 ? "B20" : "R20"}
              color={ props.index % 2 === 0 ? "B20" : "R20"}
              borderRadius={'6px'}
              padding="6px 12px"
              fontSize={'12px'}>
              { props.index % 2 === 0 ? <ArrowUpSmall /> : <ArrowDownSmall /> }     
                  48,8%
            </Box>
            
          </Box>
        </Box>
      </Card>
    )
  }
}

export default UserTicket;