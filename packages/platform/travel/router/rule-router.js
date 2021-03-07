import { bxAnaalyse } from '@/core/icons'
const RouteView = {
  name: 'TravelView',
  render: h => h('div', '我是出行平台的页面啊')
}
export default [
  {
    path: '/travel',
    name: 'travelpage',
    // redirect: '/dashboard/workplace',
    component: RouteView,
    meta: { title: '出行平台测试页', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] }
    // children: [
    //   {
    //     path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
    //     name: 'Analysis',
    //     component: () => import('@/views/dashboard/Analysis'),
    //     meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['dashboard'] }
    //   },
    //   // 外部链接
    //   {
    //     path: 'https://www.baidu.com/',
    //     name: 'Monitor',
    //     meta: { title: 'menu.dashboard.monitor', target: '_blank' }
    //   },
    //   {
    //     path: '/dashboard/workplace',
    //     name: 'Workplace',
    //     component: () => import('@/views/dashboard/Workplace'),
    //     meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: ['dashboard'] }
    //   }
    // ]
  }
]
