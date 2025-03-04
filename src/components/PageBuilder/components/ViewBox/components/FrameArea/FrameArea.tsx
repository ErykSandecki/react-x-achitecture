import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// components
import { Box, Small } from 'shared';

// hooks
import { useTheme } from 'hooks';

// others
import { className, classNames } from './classNames';

import { translationNameSpace } from './constants';

// styles
import styles from './frame-area.scss';

// types
import { TRectCoordinates } from 'types';
import Corners from '../Corners/Corners';

export type TFrameAreaProps = {
  frameArea: TRectCoordinates;
};

const FrameArea: FC<TFrameAreaProps> = ({ frameArea }) => {
  const { classNamesWithTheme, cx } = useTheme(classNames, styles);
  const { t } = useTranslation();
  const { x1, x2, y1, y2 } = frameArea || {};
  const labelX = x1 < x2 ? x1 : x2;
  const labelY = y1 < y2 ? y1 : y2;

  if (!frameArea) {
    return null;
  }

  return (
    <Box
      classes={{
        className: cx(classNamesWithTheme[className]),
      }}
    >
      <Small
        classes={{ className: cx(classNamesWithTheme.label) }}
        sx={{ cl: 'blue1', left: `${labelX}px`, top: `${labelY}px` }}
      >
        {t(`${translationNameSpace}.label.createFrame`)}
      </Small>
      <svg className={cx(classNamesWithTheme.area)}>
        <path d={`M ${x1},${y1} H ${x2} V ${y2} H ${x1} V ${y1}`} />
      </svg>
      <Corners rectCoordinates={frameArea} />
    </Box>
  );
};

export default FrameArea;
