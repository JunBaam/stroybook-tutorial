import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  // NOTE: action : stroybook에서 해당 액션의 이름을 정의
  // NOTE: argTypes:
  argTypes: { handleClick: { action: "handleClick" } },
};

// NOTE: 일반적인 스토리북 선언
// export const Red = () => <Button label="클릭" backgroundColor="red" />;

// NOTE: 해당 스토리가 기본적으로 이양식을 따르게한다.
const Template = (args) => <Button {...args} />;

// NOTE: 변수에 템플릿을 바인딩
export const Red = Template.bind({});
// NOTE: 바인딩한 args 값의 양식을 적용
Red.args = {
  backgroundColor: "red",
  label: "클릭",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "클릭",
  size: "lg",
};
