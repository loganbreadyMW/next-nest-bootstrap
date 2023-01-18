import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography as TypographyComponent } from './Typography';

export default {
  title: 'Design System/Atoms/Data Display/Typography',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

export const Typography: ComponentStory<typeof TypographyComponent> = () => (
  <>
    <TypographyComponent variant='h1' gutterBottom>
      Headline 1
    </TypographyComponent>
    <TypographyComponent variant='h2' gutterBottom>
      Headline 2
    </TypographyComponent>
    <TypographyComponent variant='h3' gutterBottom>
      Headline 3
    </TypographyComponent>
    <TypographyComponent variant='h4' gutterBottom>
      Headline 4
    </TypographyComponent>
    <TypographyComponent variant='h5' gutterBottom>
      Headline 5
    </TypographyComponent>
    <TypographyComponent variant='h6' gutterBottom>
      Headline 6
    </TypographyComponent>
    <TypographyComponent variant='subtitle1' gutterBottom>
      Subtitle 1
    </TypographyComponent>
    <TypographyComponent variant='subtitle2' gutterBottom>
      Subtitle 2
    </TypographyComponent>
    <TypographyComponent variant='body1' gutterBottom>
      Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </TypographyComponent>
    <TypographyComponent variant='body2' gutterBottom>
      Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas
      sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor
      saepe inventore, soluta id accusantium voluptas beatae.
    </TypographyComponent>
    <TypographyComponent variant='button' display='block' gutterBottom>
      button text
    </TypographyComponent>
    <TypographyComponent variant='caption' display='block' gutterBottom>
      caption text
    </TypographyComponent>
    <TypographyComponent variant='overline' display='block' gutterBottom>
      overline text
    </TypographyComponent>
  </>
);
