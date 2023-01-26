import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../../config/i18n/i18nForTests';

export const renderWithTranslation = (comnponent: ReactNode) => render(
  <I18nextProvider i18n={i18nForTests}>
    {comnponent}
  </I18nextProvider>,
);
