import ReactionButton from "../components/ReactionButton";

export default {
  title: "Components/ReactionButton",
  component: ReactionButton,
  argTypes: {
    isActive: { control: "boolean" },
    count: { control: "boolean" },
    label: { control: "text" },
    onClickButton: { action: "onClickButton" },
  },
};

const Template = (args) => <ReactionButton {...args} />;

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  isActive: true,
  label: "활성화",
  count: 1,
};

export const InActiveButton = Template.bind({});
InActiveButton.args = {
  isActive: false,
  label: "비활성화",
  count: 0,
};

const dummyButtonGroup = [
  {
    isActive: true,
    label: "버튼A",
    count: 2,
  },
  {
    isActive: true,
    label: "버튼A",
    count: 2,
  },
  {
    isActive: true,
    label: "버튼A",
    count: 2,
  },
];

export const ManyButton = (args) => (
  <div className="flex gap-4">
    {dummyButtonGroup.map((button) => (
      <ReactionButton
        isActive={button.isActive}
        count={button.count}
        label={button.label}
      />
    ))}
  </div>
);

export const Primary = Template.bind({});
Primary.args = { backgroundColor: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
