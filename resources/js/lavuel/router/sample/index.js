import Widgets from '@/views/sample/Widgets'

import base from './base'
import buttons from './buttons'
import icons from './icons'
import notifications from './notifications'
import theme from './theme'

export default [
  base,
  buttons,
  icons,
  notifications,
  theme,
  {
    path     : 'widgets',
    name     : 'Widgets',
    component: Widgets,
  },
]
