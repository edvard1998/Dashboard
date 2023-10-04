import { useSelector } from 'react-redux';
import { chartSeriesValues } from '@/redux/silces/calendarSlice';
import { Box, Divider } from '@wix/design-system';
import SeriaDataItem from './seriaDataItem';

const SeriaDataList = () => {
	const lastData = useSelector(chartSeriesValues);

	return (
		<>
			<Box direction="horizontal">
				{
					lastData.map((data, index) =>  (
						<SeriaDataItem key={index} data={data} />
					))
				}
			</Box>
			<Box padding={'30px 10px 30px 0'}>
				<Divider skin="light" />
			</Box>
		</>
	)
}

export default SeriaDataList;