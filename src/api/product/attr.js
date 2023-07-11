import request from '@/utils/request'

export const reqCategortListC1 = () => request({ url: `/admin/product/getCategory1`, method: 'get' })
export const reqCategortListC2 = (category1Id) => request({ url: `/admin/product/getCategory2/${category1Id}`, method: 'get' })
export const reqCategortListC3 = (category2Id) => request({ url: `/admin/product/getCategory3/${category2Id}`, method: 'get' })

export const reqAttrInfoList = (category1Id, category2Id, category3Id) => request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get' })


export const reqAddAttrInfo = (data) => request({ url: '/admin/product/saveAttrInfo', data, method: 'post' })

export const reqDelAttrInfo = (attrId) => request({ url: `/admin/product/deleteAttr/${attrId}`, method: 'delete' })
