export default {
  items: [
    {
      name : 'Dashboard',
      url  : '/dashboard',
      icon : 'icon-speedometer',
      badge: {
        variant: 'primary',
        text   : 'NEW',
      },
    },
    {
      title  : true,
      name   : 'Theme',
      class  : '',
      wrapper: {
        element   : '',
        attributes: {},
      },
    },
    {
      name: 'Colors',
      url : '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url : '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title  : true,
      name   : 'Components',
      class  : '',
      wrapper: {
        element   : '',
        attributes: {},
      },
    },
    {
      name    : 'Base',
      url     : '/base',
      icon    : 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url : '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url : '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url : '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url : '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'List Groups',
          url : '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url : '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url : '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bars',
          url : '/base/progress-bars',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url : '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url : '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url : '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url : '/buttons/standard-buttons',
      icon: 'icon-cursor',
    },
    {
      name: 'Icons',
      url : '/icons/simple-line-icons',
      icon: 'icon-star',
    },
    {
      name    : 'Notifications',
      url     : '/notifications',
      icon    : 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url : '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url : '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url : '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name : 'Widgets',
      url  : '/widgets',
      icon : 'icon-calculator',
      badge: {
        variant: 'primary',
        text   : 'NEW',
      },
    },
  ],
}
