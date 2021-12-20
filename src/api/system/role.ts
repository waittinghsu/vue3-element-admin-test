import request from '@/utils/request'

/**
 * 获取角色分页列表
 *
 * @param queryParams
 */
export function listRolesWithPage(queryParams: object) {
    return request({
        url: '/youlai-admin/api/v1/roles/page',
        method: 'get',
        params: queryParams
    })
}

/**
 * 获取角色列表
 *
 * @param queryParams
 */
export function listRoles(queryParams: object) {
    return request({
        url: '/youlai-admin/api/v1/roles',
        method: 'get',
        params: queryParams
    })
}

/**
 * 获取角色详情
 *
 * @param id
 */
export function getRoleDetail(id: number) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + id,
        method: 'get'
    })
}

/**
 * 添加角色
 *
 * @param data
 */
export function addRole(data: object) {
    return request({
        url: '/youlai-admin/api/v1/roles',
        method: 'post',
        data: data
    })
}

/**
 * 更新角色
 *
 * @param id
 * @param data
 */
export function updateRole(id: number, data: object) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + id,
        method: 'put',
        data: data
    })
}

/**
 * 批量删除角色，多个以英文逗号(,)分割
 *
 * @param ids
 */
export function deleteRoles(ids: string) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + ids,
        method: 'delete'
    })
}


/**
 * 获取角色的菜单列表
 *
 * @param roleId
 */
export function listRoleMenuIds(roleId: number) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + roleId + '/menu_ids',
        method: 'get',
    })
}

/**
 * 修改角色的菜单
 *
 * @param roleId
 * @param menuIds
 */
export function updateRoleMenu(roleId: number, menuIds: Array<Number>) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + roleId + '/menus',
        method: 'put',
        data: {menuIds: menuIds}
    })
}


/**
 * 获取角色的权限列表
 *
 * @param roleId
 */
export function listRolePermission(roleId: number) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + roleId + '/permissions',
        method: 'get',
    })
}

/**
 * 保存角色权限
 *
 * @param menuId 菜单ID，归类权限
 * @param roleId
 * @param permIds
 */
export function updateRolePermission(menuId: number, roleId: number, permIds: Array<number>) {
    return request({
        url: '/youlai-admin/api/v1/roles/' + roleId + '/permissions',
        method: 'put',
        data: {menuId: menuId, permIds: permIds}
    })
}
