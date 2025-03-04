import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

// components
import MoveableElement from '../MoveableElement/MoveableElement';
import { Small } from 'shared';

// hooks
import { useTheme } from 'hooks';

// others
import { className as classNameFrame, classNames } from './classNames';
import { translationNameSpace } from './contants';

// styles
import styles from './frame.scss';

// types
import { TElementProps } from '../../types';

export type TFrameProps = TElementProps;

const Frame: FC<TFrameProps> = ({
  className,
  id,
  mouseMode,
  parentId,
  type,
}) => {
  const { classNamesWithTheme, cx } = useTheme(classNames, styles);
  const { t } = useTranslation();

  return (
    <MoveableElement
      classes={{
        className: cx(className, classNamesWithTheme[classNameFrame]),
      }}
      id={id}
      parentId={parentId}
      mouseMode={mouseMode}
      type={type}
    >
      <Small classes={{ className: cx(classNamesWithTheme.label) }}>
        {t(`${translationNameSpace}.label.createFrame`)}
      </Small>
    </MoveableElement>
  );
};

export default memo(Frame);
