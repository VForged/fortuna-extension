import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { useHistory } from 'react-router-dom';

import { Modal, ModalOverlay } from '../../component-library';
import { ModalContent } from '../../component-library/modal-content/modal-content';
import { ModalHeader } from '../../component-library/modal-header/modal-header';
import { Text, Box } from '../../../components/component-library';
import {
  TextColor,
  TextVariant,
} from '../../../helpers/constants/design-system';
import { CONFIRM_ADD_CUSTODIAN_TOKEN } from '../../../helpers/constants/routes';

export default function QRCodeModal({ onClose, custodianName }) {
  const history = useHistory();

  // Hardcoded for Saturn for now
  const currentQRCode = 'some-token-will-do';

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(
          'https://mmi-qr-server.adaptable.app/connect-requests/latest',
        );
        const data = await response.json();

        if (data) {
          await fetch(
            'https://mmi-qr-server.adaptable.app/connect-requests/latest',
            {
              method: 'DELETE',
            },
          );

          data.custodian = data.environment;
          const tempConnectRequest = JSON.stringify(data);

          // eslint-disable-next-line no-undef
          localStorage.setItem('tempConnectRequest', tempConnectRequest);

          clearInterval(intervalId);

          history.push(CONFIRM_ADD_CUSTODIAN_TOKEN);
          onClose();
        }
      } catch (error) {}
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
        onClose={onClose}>Connect {custodianName ? custodianName : 'custodian'}
        </ModalHeader>

        <Box
          style={{
            padding: 20,
            backgroundColor: 'var(--qr-code-white-background)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Text
            as="p"
            paddingRight={6}
            paddingLeft={6}
            paddingBottom={4}
            color={TextColor.textDefault}
            variant={TextVariant.bodySm}
          >
            To connect your accounts scan the QR code bellow.
          </Text>
          <QRCode value={currentQRCode.toUpperCase()} size={270} />
        </Box>
      </ModalContent>
    </Modal>
  );
}

QRCodeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  custodianName: PropTypes.string
};
