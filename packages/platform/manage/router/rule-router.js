import { bxAnaalyse } from '@/core/icons'
const RouteView = {
  name: 'ManageView',
  render: h => h('div', '我是管理平台的页面啊')
}
export default [
  {
    path: '/manage',
    name: 'managepage',
    // redirect: '/dashboard/workplace',
    component: RouteView,
    meta: { title: '管理测试页', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] }
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
