import { ViteReactSSG } from 'vite-react-ssg/single-page'
import Index from './Index.tsx'

import '@mantine/core/styles/baseline.css';
// import '@mantine/core/styles/default-css-variables.css';
import './vendor/mantine/variables.css';
import './vendor/mantine/light.css';
import './vendor/mantine/dark.css';
import '@mantine/core/styles/global.css';

// TODO use my unplugin

import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Flex.css';
import '@mantine/core/styles/FloatingIndicator.css';
import '@mantine/core/styles/ActionIcon.css';

import '@mantine/core/styles/Button.css';

export const createRoot = ViteReactSSG(
  <Index />,
)
