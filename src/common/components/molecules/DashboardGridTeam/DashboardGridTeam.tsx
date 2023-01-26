import { Profile } from '@atoms/Profile';
import { AvatarGroup } from '@mui/material';
import styles from './DashboardGridTeam.module.scss';

interface DashboardGridTeamProps {
  team: {
    name: string;
    email: string;
    image: string;
  }[];
}

interface memberProps {
  image: string;
  name: string;
  email: string;
}

export const DashboardGridTeam = ({ team }: DashboardGridTeamProps) => {
  if (team.length === 1) {
    return (
      <AvatarGroup>
        {team.map((member: memberProps, index: number) => (
          <div key={index} className={styles['avatar-group-container']}>
            <Profile
              key={index}
              src={member.image}
              alt={member.name}
              profileHeight={40}
              profileWidth={40}
            />
            <div className={styles['avatar-member-info']}>
              <p>{member.name}</p>
              <a href={`emailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
        ))}
      </AvatarGroup>
    );
  }

  return (
    <AvatarGroup max={3} spacing='small'>
      {team.map((member: memberProps, index: number) => (
        <div key={index} className={styles['avatar-group-container']}>
          <Profile
            key={index}
            src={member.image}
            alt={member.name}
            profileHeight={40}
            profileWidth={40}
          />
        </div>
      ))}
    </AvatarGroup>
  );
};
