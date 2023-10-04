import { Card, Box, Image } from '@wix/design-system';
import containerStyle from "@/styles/containers.module.css";

const Header = () => {
  return (
    <Box>
      <Card className={containerStyle["nav-bar"]}>
        <Box padding={'16px'}>
          <Image
            src="/EWENTz_colored.svg"
            width={'255px'}
            height={'50px'}
            transparent={true}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default Header;