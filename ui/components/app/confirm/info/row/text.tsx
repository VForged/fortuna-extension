import React, { useContext } from 'react';
import { I18nContext } from '../../../../../contexts/i18n';
import {
  AlignItems,
  Display,
  FlexWrap,
  IconColor,
  TextColor,
} from '../../../../../helpers/constants/design-system';
import { Box, ButtonIcon, IconName, Text } from '../../../../component-library';

export type ConfirmInfoRowTextProps = {
  text: string;
  onEditClick?: () => void;
};

export const ConfirmInfoRowText: React.FC<ConfirmInfoRowTextProps> = ({
  text,
  onEditClick,
}) => {
  const t = useContext(I18nContext);

  const isEditable = Boolean(onEditClick);

  return (
    <Box
      display={Display.Flex}
      alignItems={AlignItems.center}
      flexWrap={FlexWrap.Wrap}
      gap={2}
    >
      <Text color={TextColor.inherit} style={{ whiteSpace: 'pre-wrap' }}>
        {text}
      </Text>
      {isEditable ? (
        <ButtonIcon
          color={IconColor.primaryDefault}
          ariaLabel={t('edit')}
          marginLeft={4}
          iconName={IconName.Edit}
          onClick={onEditClick}
        />
      ) : null}
    </Box>
  );
};
