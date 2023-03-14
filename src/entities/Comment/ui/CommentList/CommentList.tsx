import {classNames} from "shared/lib/classNames/classNames";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string,
}

export const CommentList = memo((props: CommentListProps) => {
    const {className} = props;
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            
        </div>
    );
});
