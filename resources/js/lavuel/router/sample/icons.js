// Views - Icons
import SimpleLineIcons from '@/views/sample/icons/SimpleLineIcons'

export default {
  path     : 'icons',
  redirect : '/icons/simple-line-icons',
  name     : 'Icons',
  component: { render (c) { return c('router-view') } },
  children : [
    {
      path     : 'simple-line-icons',
      name     : 'Simple Line Icons',
      component: SimpleLineIcons,
    },
  ],
}
