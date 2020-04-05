<template>
    <div id="inquiry">
        <TopArea @sync-from-top-step="updateHotDeptFromTop" :selectedDept="selectedDept"/>
        <div id="department" class="white">
            <Button
                @click="updateDoctorList(val,idx)"
                v-for="(val,idx) in hotDept"
                :key="idx+1"
                :class="[' dep-'+idx, {'selected': idx === selectedIdx}]"
                round
                type="default">
                {{val}}
            </Button>
        </div>
        <DoctorList :deptName="selectedDept"/>
    </div>
</template>

<script>
    import { Button } from 'vant'
    import TopArea from '../components/healthInquiry/TopArea'
    import DoctorList from '../components/healthInquiry/DoctorList'

    export default {
        name: 'HealInquiry',
        data () {
            return {
                selectedIdx: 0,
                selectedDept: '',
                hotDept: []
            }
        },
        components: {
            Button,
            TopArea,
            DoctorList
        },
        methods: {
            updateDoctorList (depName, depIndex) {
                this.selectedIdx = depIndex
                this.selectedDept = depName
            },
            /**
             * 点击选择科室弹框后更新新热门科室数据(把选择的科室放到最前边)
             */
            updateHotDeptFromTop (dep) {
                let tempIndex = ''
                tempIndex = this.hotDept.indexOf(dep)
                if (tempIndex > -1) {
                    this.selectedIdx = tempIndex
                    this.hotDept.length = 8
                } else {
                    this.selectedIdx = 0
                    this.hotDept.unshift(dep)
                    this.hotDept.length = 8
                }
                this.selectedDept = dep
            },
            /**
             * @param dep
             */
            selectedHotDept (dep) {
                this.selectedDept = dep
            }
        },
        mockData () {

        },
        beforeMount () {
            // 模拟8个热门科室
            for (let i = 8; i--;) {
                this.hotDept.push('科室' + i)
            }
            this.selectedDept = this.hotDept[0]
        }
    }
</script>

<style lang="stylus" scoped>
    #inquiry
        background-color rgba(166, 166, 166, 0.27)

        #department
            background-color #fff
            border 1px solid rgba(204, 204, 204, 0.36)
            border-radius 10pt
            margin 0 2.2vw 0 2.2vw
            padding 6pt 5pt

            .van-button
                min-width 18vw
                height 40px
                margin 1vw 0.6vw

            .selected
                color #1989fa
                border-color #1989fa
</style>
