import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login';
import Helloindex from '@/components/helloindex';
import EnterpriseIndex from '@/components/enterprise/index';//企业首页
import InformationIndex from '@/components/information/index';//企业信息
import LocalIndex from '@/components/localManagement/index';//现场管理
import RiskControlIndex from '@/components/riskControl/index';//风险管理
    import RiskList from '@/components/riskControl/riskList';//风险辨识清单
    import DutyList from '@/components/riskControl/dutyList';//责任清单
    import ControlList from '@/components/riskControl/controlList';//管控措施清单
    import RiskMap from '@/components/riskControl/riskMap';//风险分布图
    import RiskStatistic from '@/components/riskControl/riskStatistic';//风险统计
    import RiskNotbook from '@/components/riskControl/riskNotbook';//风险防控手册
    import AssessAdd from '@/components/riskControl/assessAdd';//添加评估
    import RiskAdd from '@/components/riskControl/riskAdd';//添加风险点
import DangerIndex from '@/components/dangerManagement/index';//隐患管理
import SystemIndex from '@/components/systemSetting/index';//系统设置
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: Login},
    {
      path: '/home',
      name: 'helloindex',
      component: Helloindex,
      children: [
        {
            path: 'enterprise', 
            name:'enterpriseIndex',
            component: EnterpriseIndex
        },
        {
            path: 'information', 
            name:'informationIndex',
            component: InformationIndex
        },
        {
            path: 'local', 
            name:'localIndex',
            component: LocalIndex
        },
        {
            path: 'control', 
            name:'riskControlIndex',
            component: RiskControlIndex,
            children: [
                {
                    path: '/', 
                    name:'riskList',
                    component: RiskList
                },
                {
                    path: 'dutyList', 
                    name:'dutyList',
                    component: DutyList
                },
                {
                    path: 'controlList', 
                    name:'controlList',
                    component: ControlList
                },
                {
                    path: 'riskMap', 
                    name:'riskMap',
                    component: RiskMap
                },
                {
                    path: 'statistic', 
                    name:'statistic',
                    component: RiskStatistic
                },
                {
                    path: 'riskNotbook', 
                    name:'riskNotbook',
                    component: RiskNotbook
                },
                {
                    path: 'assessAdd', 
                    name:'assessAdd',
                    component: AssessAdd
                },
                {
                    path: 'riskAdd', 
                    name:'riskAdd',
                    component: RiskAdd
                },

            ]
        },
        {
            path: 'danger', 
            name:'dangerIndex',
            component: DangerIndex
        },
        {
            path: 'system', 
            name:'SystemIndex',
            component: SystemIndex
        },

        
      ]
    },
  ]
})
