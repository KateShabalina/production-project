import {classNames} from "shared/lib/classNames/classNames";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {className} = props;
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            
        </div>
    );
});
