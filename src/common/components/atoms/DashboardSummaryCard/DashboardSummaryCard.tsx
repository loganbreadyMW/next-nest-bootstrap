import { DashboardArrowDown } from '@atoms/Icons/DashboardArrowDown';
import { DashboardArrowUp } from '@atoms/Icons/DashboardArrowUp';
import { MenuDots } from '@atoms/Icons/MenuDots';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import styles from './DashboardSummaryCard.module.scss';

interface DashboardSummaryCardProps {
  cardTitle: string;
  settingsOnClick?: () => void;
  cardContentLeft: string;
  cardContentRight: string;
  isPositive: boolean;
}

export const DashboardSummaryCard = ({
  cardTitle,
  settingsOnClick,
  cardContentLeft,
  cardContentRight,
  isPositive,
}: DashboardSummaryCardProps) => {
  return (
    <Card className={styles['card']}>
      <CardHeader
        sx={{ padding: '0' }}
        title={cardTitle}
        titleTypographyProps={{ className: styles['card-header-title'] }}
        action={
          <IconButton aria-label='settings' onClick={settingsOnClick}>
            <MenuDots />
          </IconButton>
        }
      />
      <CardContent sx={{ padding: '0' }}>
        <div className={styles['card-content']}>
          <h3>{cardContentLeft}</h3>
          <div
            className={styles['card-content-right']}
            style={{
              backgroundColor: isPositive ? '#ECFDF3' : '#FEF3F2',
              color: isPositive ? '#027A48' : '#B42318',
            }}
          >
            {isPositive ? <DashboardArrowUp /> : <DashboardArrowDown />}
            <p>{cardContentRight}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
