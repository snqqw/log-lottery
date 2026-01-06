import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'
import musicUrl from '@/assets/audio/music.mp3';
import zootopiaUrl from '@/assets/audio/zootopia.mp3';
import whistleUrl from '@/assets/audio/whistle.mp3';
import giftUrl from '@/assets/images/gift.png'

type IPersonConfigWithoutUuid = Omit<IPersonConfig, 'uuid'>
export const defaultPersonList = <IPersonConfigWithoutUuid[]>
    [
        { uid: 'U100156001', name: '黄伟', department: '行政部', identity: '前台', avatar: 'https://robohash.org/U100156001?set=set4&size=500x500', x: 1, y: 1, id: 0, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156002', name: '周军', department: '运营部', identity: '运营总监', avatar: 'https://robohash.org/U100156002?set=set4&size=500x500', x: 2, y: 1, id: 1, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156003', name: '高洋', department: '运营部', identity: '活动运营', avatar: 'https://robohash.org/U100156003?set=set4&size=500x500', x: 3, y: 1, id: 2, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156004', name: '孙丽', department: '人力资源部', identity: '招聘经理', avatar: 'https://robohash.org/U100156004?set=set4&size=500x500', x: 4, y: 1, id: 3, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156005', name: '高佳', department: '客服部', identity: '客服经理', avatar: 'https://robohash.org/U100156005?set=set4&size=500x500', x: 5, y: 1, id: 4, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156006', name: '黄丽', department: '客服部', identity: '客服专员', avatar: 'https://robohash.org/U100156006?set=set4&size=500x500', x: 6, y: 1, id: 5, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156007', name: '何超', department: '客服部', identity: '客服专员', avatar: 'https://robohash.org/U100156007?set=set4&size=500x500', x: 7, y: 1, id: 6, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156008', name: '林轩', department: '客服部', identity: '投诉处理专员', avatar: 'https://robohash.org/U100156008?set=set4&size=500x500', x: 8, y: 1, id: 7, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156009', name: '罗杰', department: '运营部', identity: '数据运营', avatar: 'https://robohash.org/U100156009?set=set4&size=500x500', x: 9, y: 1, id: 8, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156010', name: '王芳', department: '行政部', identity: '行政总监', avatar: 'https://robohash.org/U100156010?set=set4&size=500x500', x: 10, y: 1, id: 9, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156011', name: '杨勇', department: '技术部', identity: '测试工程师', avatar: 'https://robohash.org/U100156011?set=set4&size=500x500', x: 11, y: 1, id: 10, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156012', name: '黄敏', department: '产品部', identity: 'UX研究员', avatar: 'https://robohash.org/U100156012?set=set4&size=500x500', x: 12, y: 1, id: 11, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156013', name: '马杰', department: '运营部', identity: '数据运营', avatar: 'https://robohash.org/U100156013?set=set4&size=500x500', x: 13, y: 1, id: 12, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156014', name: '王涛', department: '财务部', identity: '会计', avatar: 'https://robohash.org/U100156014?set=set4&size=500x500', x: 14, y: 1, id: 13, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156015', name: '何磊', department: '行政部', identity: '前台', avatar: 'https://robohash.org/U100156015?set=set4&size=500x500', x: 15, y: 1, id: 14, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156016', name: '徐涛', department: '市场部', identity: '市场总监', avatar: 'https://robohash.org/U100156016?set=set4&size=500x500', x: 16, y: 1, id: 15, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156017', name: '刘欣', department: '人力资源部', identity: '薪酬绩效专员', avatar: 'https://robohash.org/U100156017?set=set4&size=500x500', x: 17, y: 1, id: 16, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156018', name: '徐明', department: '法务部', identity: '法律顾问', avatar: 'https://robohash.org/U100156018?set=set4&size=500x500', x: 1, y: 2, id: 17, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156019', name: '何轩', department: '技术部', identity: '技术总监', avatar: 'https://robohash.org/U100156019?set=set4&size=500x500', x: 2, y: 2, id: 18, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156020', name: '周伟', department: '法务部', identity: '合同专员', avatar: 'https://robohash.org/U100156020?set=set4&size=500x500', x: 3, y: 2, id: 19, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156021', name: '吴军', department: '技术部', identity: '移动端工程师', avatar: 'https://robohash.org/U100156021?set=set4&size=500x500', x: 4, y: 2, id: 20, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156022', name: '罗明', department: '财务部', identity: '会计', avatar: 'https://robohash.org/U100156022?set=set4&size=500x500', x: 5, y: 2, id: 21, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156023', name: '吴静', department: '产品部', identity: '产品助理', avatar: 'https://robohash.org/U100156023?set=set4&size=500x500', x: 6, y: 2, id: 22, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156024', name: '高芳', department: '技术部', identity: '技术总监', avatar: 'https://robohash.org/U100156024?set=set4&size=500x500', x: 7, y: 2, id: 23, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156025', name: '高伟', department: '行政部', identity: '前台', avatar: 'https://robohash.org/U100156025?set=set4&size=500x500', x: 8, y: 2, id: 24, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156026', name: '黄强', department: '法务部', identity: '法务总监', avatar: 'https://robohash.org/U100156026?set=set4&size=500x500', x: 9, y: 2, id: 25, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156027', name: '张强', department: '产品部', identity: '产品经理', avatar: 'https://robohash.org/U100156027?set=set4&size=500x500', x: 10, y: 2, id: 26, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156028', name: '高丽', department: '法务部', identity: '合同专员', avatar: 'https://robohash.org/U100156028?set=set4&size=500x500', x: 11, y: 2, id: 27, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156029', name: '周丽', department: '法务部', identity: '法律顾问', avatar: 'https://robohash.org/U100156029?set=set4&size=500x500', x: 12, y: 2, id: 28, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156030', name: '胡敏', department: '法务部', identity: '法律顾问', avatar: 'https://robohash.org/U100156030?set=set4&size=500x500', x: 13, y: 2, id: 29, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156031', name: '林军', department: '人力资源部', identity: '培训专员', avatar: 'https://robohash.org/U100156031?set=set4&size=500x500', x: 14, y: 2, id: 30, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156032', name: '马娜', department: '市场部', identity: '市场推广', avatar: 'https://robohash.org/U100156032?set=set4&size=500x500', x: 15, y: 2, id: 31, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156033', name: '高丽', department: '法务部', identity: '法务总监', avatar: 'https://robohash.org/U100156033?set=set4&size=500x500', x: 16, y: 2, id: 32, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156034', name: '胡芳', department: '市场部', identity: '品牌经理', avatar: 'https://robohash.org/U100156034?set=set4&size=500x500', x: 17, y: 2, id: 33, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156035', name: '郭静', department: '运营部', identity: '内容运营', avatar: 'https://robohash.org/U100156035?set=set4&size=500x500', x: 1, y: 3, id: 34, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156036', name: '吴杰', department: '行政部', identity: '前台', avatar: 'https://robohash.org/U100156036?set=set4&size=500x500', x: 2, y: 3, id: 35, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] }
    ]

export const defaultMusicList = [
    {
        id: `music.mp3${new Date().getTime().toString()}`,
        name: '音乐.mp3',
        url: musicUrl,
    },
    {
        id: `zootopia.mp3${new Date().getTime().toString()}`,
        name: '疯狂动物城.mp3',
        url: zootopiaUrl,
    },
    {
        id: `whistle.mp3${new Date().getTime().toString()}`,
        name: 'BLACKPINK-WHISTLE.mp3',
        url: whistleUrl,
    }

]

export const defaultPrizeList = <IPrizeConfig[]>[
    {
        id: '001',
        name: '三等奖',
        sort: 1,
        isAll: false,
        count: 3,
        isUsedCount: 0,
        picture: {
            id: '2',
            name: '三等奖',
            url: giftUrl,
        },
        separateCount: {
            enable: true,
            countList: [],
        },
        desc: '三等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '002',
        name: '二等奖',
        sort: 2,
        isAll: false,
        count: 2,
        isUsedCount: 0,
        picture: {
            id: '1',
            name: '二等奖',
            url: giftUrl,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '二等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '003',
        name: '一等奖',
        sort: 3,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '0',
            name: '一等奖',
            url: giftUrl,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '一等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '004',
        name: '超级大奖',
        sort: 4,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '3',
            name: '超级奖',
            url: giftUrl,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '超级大奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '005',
        name: '特别奖',
        sort: 5,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '4',
            name: '特别奖',
            url: giftUrl,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '特别奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
]
export const defaultCurrentPrize = <IPrizeConfig>{
    id: '001',
    name: '三等奖',
    sort: 1,
    isAll: false,
    count: 12,
    isUsedCount: 0,
    picture: {
        id: '2',
        name: '三等奖',
        url: giftUrl,
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '三等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: '',
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
}

export const defaultImageList = [
    {
        id: '0',
        name: '一等奖',
        url: giftUrl,
    },
    {
        id: '1',
        name: '二等奖',
        url: giftUrl,
    },
    {
        id: '2',
        name: '三等奖',
        url: giftUrl,
    },
    {
        id: '3',
        name: '超级奖',
        url: giftUrl,
    },
    {
        id: '4',
        name: '特别奖',
        url: giftUrl,
    },
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 66, 67, 84, 101, 100, 32, 33, 93, 65, 82, 99]
