<template>
    <div id="inquiry">
        <TopArea
            @sync-from-top-step="updateHotDeptFromTop"
            :selectedDept="selectedDept"
            :allDept="allDept"/>
        <div id="department" class="white">
            <Button
                @click="updateDoctorList(val)"
                v-for="(val,idx) of hotDept"
                :key="idx"
                :class="[' dep-'+idx, {'selected': selectedDept.dept_id === val.dept_id}]"
                round
                type="default">
                {{val.dept_name}}
            </Button>
        </div>
        <DoctorList :data="doctorList"/>
    </div>
</template>

<script>
    import { Button } from 'vant'
    import TopArea from '@c/healthInquiry/TopArea'
    import DoctorList from '@c/healthInquiry/DoctorList'
    import axios from 'axios'
    export default {
        name: 'HealInquiry',
        data () {
            return {
                selectedDept: {
                    type: Object
                },
                hotDept: [],
                allDept: [],
                doctorList: []
            }
        },
        components: {
            Button,
            TopArea,
            DoctorList
        },
        methods: {
            updateDoctorList (dept) {
                this.selectedDept = dept
                this.getDoctorList(dept)
            },
            /**
             * 点击选择科室弹框后更新新热门科室数据(把选择的科室放到最前边)
             */
            updateHotDeptFromTop (dept) {
                if (!this.hotDept.includes(dept)) {
                    this.hotDept.unshift(dept)
                    this.hotDept.length = 8
                }
                this.selectedDept = dept
                this.getDoctorList(dept)
            },
            getDepartment () {
                axios.get('data/department').then(data => {
                    data = data.data.list
                    const start = Math.floor(Math.random() * (data.length - 8))
                    this.allDept = data
                    this.hotDept = data.slice(start, start + 8) // 热门科室随机取8个
                    this.selectedDept = this.hotDept[0]
                    console.log(data)
                })
            },
            getDoctorList (dept) {
                axios.get('data/doctors').then(data => {
                    data = data.data.list
                    dept = dept || this.selectedDept
                    this.doctorList = data.filter(item => item.department === dept.dept_name)
                    console.log(this.doctorList, dept)
                })
            }
        },
        beforeMount () {
            this.getDepartment()
            this.getDoctorList()
        }
    }
</script>

<style lang="stylus" scoped>
    #inquiry
        background-color rgba(166, 166, 166, 0.27)
        height 100vh
        overflow hidden
        #department
            background-color #fff
            border 1px solid rgba(204, 204, 204, 0.36)
            border-radius 10pt
            margin 0 2.2vw 0 2.2vw
            padding 6pt 5pt

            .van-button
                max-width 21vw
                height 4.5vh
                line-height 4.5vh
                margin 1vw 0.5vw
                padding 0 1.7vw
                overflow-x hidden
                text-overflow ellipsis
                white-space nowrap

            .selected
                color #1989fa
                border-color #1989fa
</style>
