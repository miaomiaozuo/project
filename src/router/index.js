import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login';
import Helloindex from '@/components/helloindex';
import EnterpriseIndex from '@/components/enterprise/index';//企业首页
import InformationIndex from '@/components/information/index';//企业信息
    import InformationBase from '@/components/information/informationBase';//基础信息
    import Record from '@/components/information/record';//资质档案
    import RecordAdd from '@/components/information/recordAdd';//添加
    import RecordEdit from '@/components/information/recordEdit';//添加
    import Organize from '@/components/information/organize';//组织机构
    import OrganizeApartment from '@/components/information/organizeApartment';//部门列表
    import OrganizePeople from '@/components/information/organizePeople';//人员列表
    import OrganizeAdd from '@/components/information/organizeAdd';//添加
    import OrganizePAdd from '@/components/information/organizePAdd';//添加

import LocalIndex from '@/components/localManagement/index';//现场管理
    import Building from '@/components/localManagement/building';//建筑物列表
    import Plan from '@/components/localManagement/plan';//平面图
    import Distancelist from '@/components/localManagement/distancelist';//防火间距表
    import Setdistance from '@/components/localManagement/setdistance';//设置防火间距
    import BuildAdd from '@/components/localManagement/buildAdd';//建筑物添加
    import Equipment from '@/components/localManagement/equipment';//设备设施
    import Equiplist from '@/components/localManagement/equiplist';//设备设施列表
    import Equiplistvery from '@/components/localManagement/EquiplistVery';//设备设施特种列表
    import EquipAdd from '@/components/localManagement/equipAdd';//设备设施添加
    import EquipspecialAdd from '@/components/localManagement/equipspecialAdd';//设备设施添加
    // import Equipment from '@/components/localManagement/equipment';//设备设施
    import Job from '@/components/localManagement/job';//作业活动
    import JobList from '@/components/localManagement/jobList';//作业活动列表
    import JobAdd from '@/components/localManagement/jobAdd';//添加
    import Material from '@/components/localManagement/material';//原辅料

import RiskControlIndex from '@/components/riskControl/index';//风险管理
    import RiskList from '@/components/riskControl/riskList';//风险辨识清单
    import DutyList from '@/components/riskControl/dutyList';//责任清单
    import ControlList from '@/components/riskControl/controlList';//管控措施清单
    import RiskMap from '@/components/riskControl/riskMap';//风险分布图
    import RiskStatistic from '@/components/riskControl/riskStatistic';//风险统计
    import RiskNotbook from '@/components/riskControl/riskNotbook';//风险防控手册
    import AssessAdd from '@/components/riskControl/assessAdd';//添加评估
    import AssessEdit from '@/components/riskControl/assessEdit';//编辑评估
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
            component: InformationIndex,
            children: [
                {
                    path: '/', 
                    name:'informationBase',
                    component: InformationBase
                },
                {
                    path: 'record', 
                    name:'record',
                    component: Record
                },
                {
                    path: 'recordAdd', 
                    name:'recordAdd',
                    component: RecordAdd
                },
                {
                    path: 'recordEdit', 
                    name:'recordEdit',
                    component: RecordEdit
                },
                {
                    path: 'organize', 
                    name:'organize',
                    component: Organize
                },
                {
                    path: 'organizeApartment', 
                    name:'organizeApartment',
                    component: OrganizeApartment
                },
                {
                    path: 'organizeAdd', 
                    name:'organizeAdd',
                    component: OrganizeAdd
                },
                {
                    path: 'organizePAdd', 
                    name:'organizePAdd',
                    component: OrganizePAdd
                },
                
                {
                    path: 'organizePeople', 
                    name:'organizePeople',
                    component: OrganizePeople
                },
                
            ]
        },
        {
            path: 'local', 
            name:'localIndex',
            component: LocalIndex,
            children: [
                {
                    path: '/', 
                    name:'building',
                    component: Building
                },
                {
                    path: 'plan', 
                    name:'plan',
                    component: Plan
                },
                {
                    path: 'distancelist', 
                    name:'distancelist',
                    component: Distancelist
                },
                {
                    path: 'setdistance', 
                    name:'setdistance',
                    component: Setdistance
                },
                {
                    path: 'buildAdd', 
                    name:'buildAdd',
                    component: BuildAdd
                },

                {
                    path: 'equip', 
                    name:'equipment',
                    component: Equipment
                },
                {
                    path: 'equiplist', 
                    name:'equiplist',
                    component: Equiplist
                },
                {
                    path: 'equipAdd', 
                    name:'equipAdd',
                    component: EquipAdd
                },
                {
                    path: 'equipspecialAdd', 
                    name:'equipspecialAdd',
                    component: EquipspecialAdd
                },
                
                {
                    path: 'equiplistvery', 
                    name:'equiplistvery',
                    component: Equiplistvery
                },
                {
                    path: 'job', 
                    name:'job',
                    component: Job
                },
                {
                    path: 'jobList', 
                    name:'jobList',
                    component: JobList
                },
                {
                    path: 'jobAdd', 
                    name:'jobAdd',
                    component: JobAdd
                },
                {
                    path: 'material', 
                    name:'material',
                    component: Material
                },
            ]
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
                    path: 'assessEdit', 
                    name:'assessEdit',
                    component: AssessEdit
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
