<template>
    <a-layout class="BasicLayout">
        <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed" 
        >
            <div class="avatar">
                <a-avatar :size="collapsed ? 32 : 64" icon="user" />
            </div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
            </a-layout-content>
            <a-layout-footer style="textAlign: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
export default {
    data(){
        return {
            collapsed: false,
        }
    }
}
</script>

<style lang="less" scoped>
.BasicLayout {
    min-height: 100vh;
    overflow: hidden;
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
        &:hover {
            color: #1890ff;
        }
    }
    .avatar {
        text-align: center;
        padding: 12px;
    }
}
</style>