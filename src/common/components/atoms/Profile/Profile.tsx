import Avatar from '@mui/material/Avatar';

interface ProfileProps {
  profileHeight: number;
  profileWidth: number;
  alt?: string;
  src?: string;
}

export const Profile = ({ profileHeight, profileWidth, src, alt }: ProfileProps) => (
  <Avatar
    sx={{ height: profileHeight, width: profileWidth }}
    src={src}
    alt={alt}
    variant='circular'
  />
);
