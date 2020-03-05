// Views - Buttons
import StandardButtons from '@/views/sample/buttons/StandardButtons'

export default {
  path     : 'buttons',
  redirect : '/buttons/buttons',
  name     : 'Buttons',
  component: { render (c) { return c('router-view') } },
  children : [
    {
      path     : 'standard-buttons',
      name     : 'Standard Buttons',
      component: StandardButtons,
    },
  ],
}
