import { useState } from 'react';
import { TableListHeader, Card, TableToolbar, Text } from '@wix/design-system';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersData, sort } from '@/redux/silces/calendarSlice';
import UserItem from './userItem';
import "@wix/design-system/styles.global.css";
import tableStyle from "@/styles/table.module.css";

const UserList = () => {
  const usersData = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const handleSort = () => { 
    dispatch(sort(sortDirection));

    setSortDirection(!sortDirection);
  }
  const [sortDirection, setSortDirection] = useState(true);
  const columns = [
    { value: 'User', align: 'left', width: '169px', sortable: true, sortDescending: sortDirection },
    { value: 'Registration Date', width: '172px' },
    { value: 'Cancelation Date', width: '179px' },
    { value: 'Plan', width: '142px' },
    { value: 'Calendar Quantity', width: '151px' },
    { value: 'Events Quantity', width: '179px' },
    { value: 'Tickets Quantity', width: '179px' }
  ];

  return (
    <Card className={tableStyle["user-list-card"]} stretchVertically={true} hideOverflow>
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <Text weight='bold' className={tableStyle["table-header-text"]}>Users</Text>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>

      <div className={tableStyle["table-container"]}>
        <TableListHeader 
          options={columns}
          onSortChange={handleSort}
          className={tableStyle["table-list-header"]}
        />
        {
          usersData.map((user, index) =>
            <UserItem key={index} user={user} />
          )
        }
      </div>
    </Card>
  );
}

export default UserList;