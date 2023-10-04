import { useSelector } from 'react-redux';
import { selectChartData } from '@/redux/silces/calendarSlice';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card } from '@wix/design-system';
import SeriaDataList from './series/seriaDataList';
import CardStyle from "@/styles/card.module.css";

const SplineChart = () => {
	const chartData = useSelector(selectChartData);

	return ( 
		<Card stretchVertically={true} hideOverflow>
			<Card.Header title="Performance" className={CardStyle['card-text']} />
			<Card.Content>
				<SeriaDataList />
				<HighchartsReact highcharts={ Highcharts } options={ chartData } />
			</Card.Content>
		</Card>
	)
}

export default SplineChart;