import { Card, Box, Heading, Text } from '@wix/design-system';

const SeriaDataItem = props => {
	if (props.data) {
		return (
			<Box>
				<Card>
					<Box 
						direction="vertical" 
						gap="16px" 
						verticalAlign="top"
						width={"335px"}
						paddingLeft={"16px"}
						borderLeft={`4px solid ${ props.data.borderColor }`}
					>
						<Text size="medium" secondary>
								{ props.data.name }
						</Text>
						<Heading size="large" weight="bold">{ props.data.value }</Heading>
					</Box>
				</Card>
			</Box>
		)
	}
}

export default SeriaDataItem;