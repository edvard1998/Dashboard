import { TableListItem, Text } from '@wix/design-system';
import tableStyle from "@/styles/table.module.css";

const UserItem = props => {
  if (props.user) {
    return (
      <TableListItem
        showDivider
        options={
          [
            {
              value: (
                <div className={tableStyle["table-user-name-cell"]}>
                  <Text size="small" ellipsis>{ props.user.name || '-'}</Text>
                </div>
              )
            },
            {
              value: ( 
                <div className={tableStyle["table-registration-date-cell"]}>
                  <Text size="small" ellipsis>{props.user.registrationDate || '-'}</Text>
                </div>
              ),
              align: 'center'
            },
            {
              value: <Text size="small" ellipsis>{props.user.cancelationDate || '-'}</Text>,
              align: 'center'
            },
            {
              value: <Text size="small" ellipsis>{props.user.Plan || '-'}</Text>,
              align: 'center'
            },
            {
              value: (
                <div className={tableStyle["table-calendar-quantity-cell"]}>
                  <Text size="small" ellipsis>{props.user.calendarQuantity || '-'}</Text>
                </div>
              ),
              align: 'center'
            },
            {
              value: (
                <div className={tableStyle["table-events-quantity-cell"]}>
                  <Text size="small" ellipsis>{props.user.eventsQuantity || '-'}</Text>
                </div>
              ),
              align: 'center'
            },
            {
              value: (
                <div className={tableStyle["table-tickets-quantity-cell"]}>
                  <Text size="small" ellipsis>{props.user.ticketsQuantity || '-'}</Text>
                </div>
              ), 
              align: 'center'
            }
          ]
        }
      />
    )
  }
} 

export default UserItem;