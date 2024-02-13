import { useState } from 'react';
import { Title } from '../../atoms/Title/Title';
import { Plus } from '../../atoms/icons/Plus';
import S from './FaqItem.module.scss';
import { Text } from '../../atoms/Text/Text';

type FaqItemProps = {
  question: string;
  answer: string;
};
export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState(false);

  const iconClassName = `${S.icon} ${open ? S.opened : S.closed}`;
  const textClassName = `${S.answer} ${open ? S.answer_opened : ''}`;

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <li className={S.container}>
      <div onClick={handleOpen} className={S.question}>
        <Title color='black' size='xmin'>
          {question}
        </Title>
        <Plus className={iconClassName} />
      </div>
      <div className={textClassName}>
        <Text color='black' size='lineheight'>
          {answer}
        </Text>
      </div>
    </li>
  );
};
