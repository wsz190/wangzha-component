// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const handles = () =>{
   alert('sss')
}
const meta = {
    title: 'Button', //组件名称
    component: Button,
    tags:['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { 
    name:'default',//故事命名
    args: {
        btnType:'default',
        children:'default',
    },
    argTypes: {
        onClick:{
            description:'点击事件'
        }
    },
    render: () => <Button onClick={handles}>default</Button>,
};

export const Secondary: Story = {
    name:'使用方法',//故事命名
    args: {
        btnType:'default',
        size:'small',
        children:'default',
    },
   
  };
